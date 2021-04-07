import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={classes.Button} onClick={props.clicked}>
      {props.content}
    </button>
  );
};

export default Button;
