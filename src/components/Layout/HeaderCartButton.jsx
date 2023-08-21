import { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const [buttonHighlighted, setButtonHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  // reduce() is a built-in method, that can transform an array of data into a single value
  // Requires two arguments
  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${
    buttonHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setButtonHighlighted(true);
    // setting timeout to animate everytime item changes, and not just for the first time
    const timer = setTimeout(() => {
      setButtonHighlighted(false);
    }, 300);
    // cleanup func
    // helps animate button on rapidly adding (clicking) items
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
