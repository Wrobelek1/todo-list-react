import { useState } from "react";
import "./style.css";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewContent] = useState("");
    
    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewContent("");
    };

  return (
    <form className=" form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={({ target }) => setNewContent(target.value)}
        className=" form__input"
        placeholder="Co jest do zrobienia?"
      />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
