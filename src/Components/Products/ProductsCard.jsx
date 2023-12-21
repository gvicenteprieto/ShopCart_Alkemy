import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ProductsCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <main>
      <section className="section__products">
        <article>
          <div className="products">
            <div className="product">
              <img
                className="product__img"
                src={product.image}
                alt={product.title}
              />
              <div className="product__info">
                <h3 className="product__title">{product.title}</h3>
                <p className="product__price">$ {product.price}</p>
                <p className="product__category">{product.category}</p>
                <div className="buttons-containers">
                  <button className="btnAddCart">
                    <FaCartShopping onClick={() => addToCart(product)} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default ProductsCard;
