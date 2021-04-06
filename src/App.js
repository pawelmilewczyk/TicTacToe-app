import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.App}>
      <div className={classes.scores}>
        <div>
          Player 1: <span>0</span>
        </div>
        <div>
          Player 2: <span>0</span>
        </div>
      </div>
      <div className={classes.move}>
        Next move:{" "}
        <span>
          Player 1 [<span>X</span>]
        </span>
      </div>
      <div className={classes.grid}>
        <div>X</div>
        <div>O</div>
        <div>O</div>
        <div>X</div>
        <div>O</div>
        <div>X</div>
        <div>O</div>
        <div>X</div>
        <div>O</div>
        <div className={classes.winner}>Player 1 WIN!</div>
      </div>
      <div className={classes.buttons}>
        <button>Next round</button>
        <button>Reset scores</button>
      </div>
    </div>
  );
}

export default App;
