import classes from "./Grid.module.scss";

const Grid = (props) => {
  return (
    <div className={classes.Grid}>
      <div>X</div>
      <div>O</div>
      <div>O</div>
      <div>X</div>
      <div>O</div>
      <div>X</div>
      <div>O</div>
      <div>X</div>
      <div>O</div>
    </div>
  );
};

export default Grid;
