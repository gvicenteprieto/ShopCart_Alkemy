import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import CartModal from "../Cart/CartModal";
import Dates from "../Dates/Dates";
import { FaCartShopping } from "react-icons/fa6";
import { ToastContainer } from "react-toastify";
import "./headerStyles.css";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const { totalItems } = useContext(CartContext);

  return (
    <>
      <Dates />
      <header className="header">
        <picture className="header__logo">
          <Link to={"/"}>
            <img
              className="logo"
              id="logo"
              width="50px"
              src="public/images/logo/shopCart.jpg"
              alt="Logo"
            />
          </Link>
        </picture>
        <menu className="menu">
        <h2 className="brandTitle">ShopCart</h2>
        </menu>
        <menu className="cart-counter-number">
          <div className="cart-counter">
            <FaCartShopping
              className="cartButton"
              onClick={() => setOpenModal(true)}
            />
            <div className="cart-counter-number">
              <p>{totalItems()}</p>
            </div>
          </div>
        </menu>
        {openModal && (
          <>
          <CartModal
            title={"Carrito de Compras"}
            isOpen={openModal}
            setIsOpen={setOpenModal}
          />
          </>
        )}

      </header>
      <ToastContainer autoClose={800} /> 
    </>
  );
};

export default Header;
