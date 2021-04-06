import classes from "./App.module.scss";
import Button from "./components/Button/Button";
import Grid from "./components/Grid/Grid";
import Winner from "./components/Winner/Winner";
import NextMove from "./components/NextMove/NextMove";
import Scores from "./components/Scores/Scores";

function App() {
  return (
    <div className={classes.App}>
      <Scores />
      <NextMove />
      <Grid />
      <Winner />
      <div className={classes.buttons}>
        <Button content="Next round" />
        <Button content="Reset game" />
      </div>
    </div>
  );
}

export default App;
