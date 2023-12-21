import ReactModal from "react-modal";
import BuyerForm from "../BuyerForm/BuyerForm";
import { SiAddthis } from "react-icons/si";
import { FaMinusSquare } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./cartModalStyles.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
    color: "white",
    backgroundColor: "grey",
    padding: ".5rem",
  },
};
const CartModal = ({ title, isOpen, setIsOpen }) => {
  const {
    cart,
    addToCart,
    clearCart,
    removeItem,
    totalItems,
    totalCart,
    buyCart,
    message,
    dataBuyer,
    clearBuyer,
    user,
  } = useContext(CartContext);

  const handleCloseModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={handleCloseModal}
      appElement={document.getElementById("root")}
    >
      <div>
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="modal-button" onClick={handleCloseModal}>
            X
          </button>
        </div>
      </div>

      <div className="cart-button-container">
        {isOpen && (
          <div>
            {cart.length > 0 ? (
              <>
                {cart.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <img
                      className="cart__img"
                      src={item.image}
                      alt={item.title}
                    />
                    <h4> {item.title}</h4>
                    <p>Precio: $ {item.price}</p>

                    <div className="cart__info">
                      <button
                        className="remove-button"
                        onClick={() => removeItem(item.id)}
                      >
                        <FaMinusSquare />
                      </button>

                      <p>Cantidad: {item.quantity}</p>

                      <button
                        className="add-button"
                        onClick={() => addToCart(item)}
                      >
                        <SiAddthis />
                      </button>
                    </div>
                  </div>
                ))}
                <p className="cart-title">Total Productos: {totalItems()}</p>
                <p className="cart-title">Total: $ {totalCart()}</p>
                <div>
                  <button className="buy-button" onClick={() => buyCart()}>
                    Comprar
                  </button>
                </div>
                <button className="clear-button" onClick={() => clearCart()}>
                  <FaRegTrashCan />
                  Limpiar carrito
                </button>
              </>
            ) : message !== "" ? (
              <div className="buyerMsg">
                <h3>{message}</h3>
                <h4>Detalle:</h4>
                {dataBuyer.cart.map((item) => (
                  <div className="dataBuyerCart" key={item.id}>
                    <div>
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="info">
                      <p>Producto: {item.title}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio Unid.: $ {item.price}</p>
                    </div>
                  </div>
                ))}
                {!user && <p>Complete su correo para finalizar</p>}

                {user.name ? (
                  <>
                    <h3>Felicidades por su compra {user.name}</h3>
                    <h3>Le estaremos escribiendo a su correo: {user.email}</h3>
                    <h4>Transacción Id: {dataBuyer.idCart}</h4>
                    <button
                      className="clear-buyer-button"
                      onClick={() => clearBuyer()}
                    >
                      Finalizar
                    </button>
                  </>
                ) : (
                  <>
                    <BuyerForm />
                  </>
                )}
              </div>
            ) : user.name === null (
              <p className="buyerMsg">El carrito está vacío.</p>
            )}
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default CartModal;
