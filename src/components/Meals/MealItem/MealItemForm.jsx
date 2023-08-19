import classes from "../MealItem/MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItem = (props) => {
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id, // Unique ID for each item
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItem;
