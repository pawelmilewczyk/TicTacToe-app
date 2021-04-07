import classes from "./Scores.module.scss";

const Scores = (props) => {
  return (
    <div className={classes.Scores}>
      <div>
        {props.player1name}: <span>{props.player1}</span>
      </div>
      <div>
        {props.player2name}: <span>{props.player2}</span>
      </div>
    </div>
  );
};

export default Scores;
