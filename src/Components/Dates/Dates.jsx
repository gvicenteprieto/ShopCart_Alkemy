import { days, months } from "../../Utils/dates";
import "./DatesStyles.css";

const Dates = () => {
  const today = new Date();
  return (
    <>
      <p className="dates">
        {" "}
        {`${days[today.getDay()]},
          ${[today.getDate()]}  de 
          ${months[today.getMonth()]} de 
          ${today.getFullYear()}`}
      </p>
    </>
  );
};

export default Dates;
