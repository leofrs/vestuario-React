import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  emptyCar,
} from "../redux/features/cartSlice";

import "../styles/carShop.scss";

const CarShop = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  const handleRemoveFromCart = ({ id, price, totalQuantidade }) => {
    dispatch(removeFromCart({ id, price, totalQuantidade }));
  };

  return (
    <div className="carShop-container ">
      <div className="carShop-header">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => {
              const { id, image, name, quantidade, totalPrice, price } = item;
              return (
                <div key={id} className="cart-item-container">
                  <img src={image} alt={`${name}`} />
                  <div className="item-details">
                    <div className="price">
                      <div>
                        <p
                          onClick={() =>
                            handleRemoveFromCart({
                              id: id,
                              price: totalPrice,
                              totalQuantidade: quantidade,
                            })
                          }
                        >
                          -
                        </p>
                        <span>{quantidade}</span>
                        <p
                          onClick={() =>
                            dispatch(
                              addToCart({
                                id: id,
                                quantidade: 1,
                                price: price,
                              })
                            )
                          }
                        >
                          +
                        </p>
                      </div>
                      R$: {totalPrice}
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <div className="w-full flex flex-col flex-wrap items-center ">
            <h1 className="text-black text-3xl font-inter font-bold tracking-normal leading-none py-4">
              Sacola Vazia
            </h1>
          </div>
        )}
      </div>
      <div className="rodape">
        <button onClick={() => dispatch(emptyCar())}>
          Esvaziar o carrinho
        </button>
        <p>Preço Total: R$ {totalPrice}</p>
      </div>
    </div>
  );
};
export default CarShop;
