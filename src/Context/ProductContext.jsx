import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const urlData = "https://fakestoreapi.com/" 

  const fetchProducts = async () => {
    setLoading(false);
    const response = await fetch(urlData + "products");
    const data = await response.json();

    //alphabet
    if (data) {
      setProducts(data.sort((a, b) => a.title.localeCompare(b.title)));
      setLoading(true);
    }

    //element name, no more 9 caracteres max
    const products = data.map((product) => {
      return {
        ...product,
        title: product.title.substring(0, 9),
      };
    });
    setProducts(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider };
