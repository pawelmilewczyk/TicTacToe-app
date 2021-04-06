import classes from "./Scores.module.scss";

const Scores = (props) => {
  return (
    <div className={classes.Scores}>
      <div>
        Player 1: <span>0</span>
      </div>
      <div>
        Player 2: <span>0</span>
      </div>
    </div>
  );
};

export default Scores;
