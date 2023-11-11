import "./style.css"

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {
  if (tasks.lenght === 0) {
    return null;
  }

  return (
    <div className="buttons">
      <button className="buttons__button"
      onClick={toggleHideDone}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button" 
        disabled={tasks.every((({ done }) => done))}
        onClick ={setAllDone}
      >
      Ukończ wszystkie
      </button>
    </div>
  );
};
export default Buttons;
