import { Link } from "react-router-dom";
import "./footerStyles.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <picture className="footer__logo">
          <Link to={"/"}>
            <img
              className="logo"
              id="logo"
              width="50px"
              src="../../public/images/logo/shopCart.jpg"
              alt="Logo"
            />
          </Link>
        </picture>

        <menu className="footer__address">
          <h2>ShopCart</h2>
        </menu>

        <nav className="footer__social">
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link
            to="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram-square"></i>
          </Link>
          <Link
            to="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-x-twitter"></i>
          </Link>
        </nav>
      </footer>
      <footer className="footer-bc-alkemy">
        <h4>IT Bootcamp de Javascript - Ministerio de Trabajo by Alkemy</h4>
        <Link to="https://www.alkemy.org/"  className="alk">Alkemy</Link>
        <h3>Carrito de Compras</h3>
        <p>Profesor: Jean Paul Ferreira</p>
        <p>Proyecto: Guillermo Vicente</p>
        <p>copyright &copy; 2023</p>
      </footer>
    </>
  );
};

export default Footer;
