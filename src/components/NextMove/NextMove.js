import classes from "./NextMove.module.scss";

const NextMove = (props) => {
  let content;
  if (!props.isNextRound) {
    if (props.changePlayer) {
      content = props.isNextX ? props.player2name : props.player1name;
    } else {
      content = props.isNextX ? props.player1name : props.player2name;
    }
  } else content = null;

  return (
    <div className={classes.NextMove}>
      Next move:
      <span>{content}</span>
    </div>
  );
};

export default NextMove;
