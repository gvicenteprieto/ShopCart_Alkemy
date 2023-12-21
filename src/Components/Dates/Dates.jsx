import { days, months } from "../../Utils/dates";
import "./datesStyles.css";

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
