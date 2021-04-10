import classes from "./Square.module.scss";

const Square = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={classes.Square}
      onClick={() => props.clicked(props.value)}
    >
      {props.value}
    </button>
  );
};

export default Square;
