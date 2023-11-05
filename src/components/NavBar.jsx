import { useContext, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";

import { useSelector } from "react-redux";

import { UserContext } from "../context/userContext";
import { signOutUser } from "../utils/firebase";

import CarNavbar from "./CarNavbar";

import logo from "../assets/crown.svg";
import "../styles/navbar.scss";

const NavBar = () => {
  const { userAtual } = useContext(UserContext);
  const [carOpen, setCarOpen] = useState(false);

  const cartItemCount = useSelector((state) => state.cart.totalQuantidade);

  const openCar = () => {
    setCarOpen(!carOpen);
  };

  return (
    <nav>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Logo com a representação de uma coroa" />
        </Link>
        <div className="nav-links-container">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/carshop" className="nav-link">
            Carrinho
          </Link>
          {userAtual ? (
            <span className="nav-link" onClick={signOutUser}>
              Sair
            </span>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/register" className="nav-link">
                Cadastre-se
              </Link>
            </>
          )}
          <div className="cart-icon-container" onClick={openCar}>
            <AiOutlineShopping size={35} />
            <span className="item-count">{cartItemCount}</span>
          </div>
          {carOpen && <CarNavbar />}
        </div>
      </div>
      <Outlet />
    </nav>
  );
};
export default NavBar;
