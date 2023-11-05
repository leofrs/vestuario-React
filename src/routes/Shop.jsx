import data from "../shop-data.json";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

import "../styles/shop.scss";

const Shop = () => {
  const dispatch = useDispatch();

  return (
    <div className="shop-container">
      {data.map((item) => {
        const { id, name, price, imageUrl } = item;
        return (
          <div key={id} className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    image: imageUrl,
                    title: name,
                    quantidade: 1,
                    price: price,
                  })
                )
              }
            >
              Adicionar ao carrinho
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Shop;
