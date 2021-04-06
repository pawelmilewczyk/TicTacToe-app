import classes from "./Winner.module.scss";

const Winner = () => {
  return (
    <div className={[classes.Hidden, classes.Winner].join(" ")}>
      Player 1 WIN!
    </div>
  );
};

export default Winner;
