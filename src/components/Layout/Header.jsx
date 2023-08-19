import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton />
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={mealsImage}
          alt="Food on a table"
        />
      </div>
    </>
  );
};

export default Header;
