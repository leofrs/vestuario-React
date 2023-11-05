import "../styles/carNavbar.scss";

import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/features/cartSlice";

const CarNavbar = () => {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const dispatch = useDispatch();
  const handleRemoveFromCart = ({ id, price, totalQuantidade }) => {
    dispatch(removeFromCart({ id, price, totalQuantidade }));
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => {
              const { id, image, name, quantidade, totalPrice } = item;
              return (
                <div key={id} className="cart-item-container ">
                  <img src={image} alt={`${name}`} />
                  <div className="item-details">
                    <span className="name">{name}</span>
                    <div className="price">
                      <span>
                        {quantidade} x ${totalPrice}
                      </span>
                      <p
                        onClick={() =>
                          handleRemoveFromCart({
                            id: id,
                            price: totalPrice,
                            totalQuantidade: quantidade,
                          })
                        }
                      >
                        X
                      </p>
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
      <p>Preço Total: R$ {totalPrice}</p>
    </div>
  );
};
export default CarNavbar;
