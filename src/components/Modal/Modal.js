import classes from "./Modal.module.scss";
import Button from "../Button/Button";

const Modal = (props) => {
  const modalClass = props.start
    ? [classes.Modal, classes.Hidden].join(" ")
    : classes.Modal;

  return (
    <form className={modalClass} onSubmit={props.submit}>
      <div className={classes.Form}>
        <div className={classes.Form__group}>
          <input placeholder="Player 1" id="Player1" />
          <label>Player 1</label>
        </div>
        <div className={classes.Form__group}>
          <input placeholder="Player 2" id="Player2" />
          <label>Player 2</label>
        </div>
      </div>
      <Button content="PLAY" />
    </form>
  );
};

export default Modal;
