import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Using spread operator to add all the values of props at once */}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
