import classes from "./Winner.module.scss";

const Winner = (props) => {
  const winnerClasses = props.isNextRound
    ? [classes.Winner]
    : [classes.Hidden, classes.Winner].join(" ");

  return <div className={winnerClasses}>{props.winner}</div>;
};

export default Winner;
