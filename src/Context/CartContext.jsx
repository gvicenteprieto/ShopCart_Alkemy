import { createContext, useState, useRef } from "react";
import { toast } from "react-toastify";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const inputRefName = useRef();
  const inputRefEmail = useRef();
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const [dataBuyer, setDataBuyer] = useState([]);
  const [buyer, setBuyer] = useState(false);
 
  const addToCart = (item) => {
    item.quantity = isNaN(item.quantity) ? 0 : item.quantity;
    item.quantity = cart.find((i) => i.id === item.id) ? item.quantity + 1 : 1;
    const newCart = cart.filter((i) => i.id !== item.id);
    localStorage.setItem("cart", JSON.stringify([...newCart, item]));
    setCart([...newCart, item]);
    toast.success("Producto agregado al carrito.");
  };

  const removeItem = (id) => {
    if (cart.find((item) => item.id === id).quantity > 1) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          item.quantity = item.quantity - 1;
          item.stock = item.stock + 1;
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
      toast.warning("Producto eliminado del carrito.");
    } else if (cart.find((item) => item.id === id).quantity === 1) {
      const newCart = cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      setCart(newCart);
      toast.warning("Producto eliminado del carrito.");
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
    setBuyer(false);
    setMessage("");
    toast.success("Carrito vaciado.");
  };

  const clearBuyer = () => {
    setMessage("");
    setBuyer(true);
    let message = `Felicidades ${user.name}! Tu compra fue exitosa:
    \n\n Id transacción ${dataBuyer.idCart}.`;
    toast.success(message, {
      autoClose: 5000,
      position: toast.POSITION.TOP_CENTER,
      interline: toast.POSITION.TOP_CENTER,
    });
    setUser({ name: "", email: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userBuyer = {
      name: inputRefName.current.value.toUpperCase(),
      email: inputRefEmail.current.value,
    };
    if (userBuyer.name === "" || userBuyer.email === "") {
      toast.error("Por favor ingrese sus datos para poder continuar.");
      return;
    }
    setUser(userBuyer);
    inputRefName.current.value = "";
    inputRefEmail.current.value = "";
    toast.success(`Usuario ${userBuyer.name} registrado. Email: ${userBuyer.email}`, 
    {autoClose: 7000, position: toast.POSITION.TOP_CENTER, interline: toast.POSITION.TOP_CENTER}
    );
  }
  
  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalCart = () => {
    return (
      Math.round(
        cart.reduce((acc, item) => acc + item.quantity * item.price, 0) * 100
      ) / 100
    );
  };

  const buyCart = () => {
    let uniqueValue = Date.now();
    const idCart = uniqueValue;

    const dataBuyer = { idCart, cart };
    setDataBuyer(dataBuyer);

    let message = `
    Total venta: $ ${totalCart()}.
    Productos: ${totalItems()}.
    `;

    clearCart();
    setMessage(message);
    return;
  };

  return (
    <CartContext.Provider
      value={{
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
        buyer,
        handleSubmit,
        user,
        inputRefName,
        inputRefEmail,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider };
