import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import "./buyerFormStyles.css"
const BuyerForm = () => {
  const { handleSubmit, inputRefName, inputRefEmail } = useContext(CartContext);

  return (
    <div className="dataBuyerForm">
      <p>
        Por favor complete los datos, requeridos para poder efectuar la venta
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input type="text" ref={inputRefName} />
        <label htmlFor="email">Email</label>
        <input type="email" ref={inputRefEmail} />
        <button type="submit">Confirmar</button>
      </form>
     <p>
        <strong>Nota:</strong> El carrito ha sido vaciado y los produtos están procesándose
      </p> 
      <p>
        Confirme para avanzar, o cierre (X) para anular la transacción en curso.
      </p>
    </div>
  );
};

export default BuyerForm;
