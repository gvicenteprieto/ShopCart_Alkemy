import "./AppStyles.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Error from "./Pages/Error/Error";
import { CartProvider } from "./Context/CartContext";
import { ProductProvider } from "./Context/ProductContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <ProductProvider>
          <CartProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </CartProvider>
        </ProductProvider>
    </>
  );
}

export default App;