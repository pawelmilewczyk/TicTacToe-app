import classes from "./Button.module.scss";

const Button = (props) => {
  return <button className={classes.Button}>{props.content}</button>;
};

export default Button;
