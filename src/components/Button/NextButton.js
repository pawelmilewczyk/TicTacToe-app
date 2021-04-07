import classes from "./Button.module.scss";

const nextButton = (props) => {
  const ButtonClass = props.disabled
    ? classes.Button
    : [classes.Button, classes.Disabled].join(" ");
  return (
    <button
      className={ButtonClass}
      onClick={props.clicked}
      disabled={!props.disabled}
    >
      {props.content}
    </button>
  );
};

export default nextButton;
