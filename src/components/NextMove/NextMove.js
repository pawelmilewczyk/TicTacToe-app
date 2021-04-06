import classes from "./NextMove.module.scss";

const NextMove = (props) => {
  return (
    <div className={classes.NextMove}>
      Next move:
      <span>
        Player 1 [<span>X</span>]
      </span>
    </div>
  );
};

export default NextMove;
