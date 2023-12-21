import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import ProductsCard from "../../Components/Products/ProductsCard";

const Home = () => {
  const { products, loading } = useContext(ProductContext);

  return (
    <>
      <main className="main__index">
        <h1>Nuestros Productos</h1>
        <section className="section__products">
          <div className="products-list">
            {loading === false ? (
              <h3>Cargando Productos...</h3>
            ) : (
              <div className="products-list">
                {loading === true && products.length === 0 ? (
                  <h3>No hay productos registrados</h3>
                ) : (
                  <>
                    <div>
                      <h3>Productos ordenados por orden alfabético</h3>
                    </div>
                    <div className="section__products">
                      {products.map((product) => (
                        <ProductsCard
                          key={"product" + product.id}
                          product={product}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
