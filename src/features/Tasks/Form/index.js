import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
    const [newTaskContent, setNewContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const focusInput = () => {
      inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
          return;
        }
        
        dispatch(addTask({
          content: trimmedNewTaskContent,
          done: false,
          id: nanoid(),
        }));
        
        setNewContent("");
        focusInput();
    };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        onChange={({ target }) => setNewContent(target.value)}
        placeholder="Co jest do zrobienia?"
      />
      <Button>Dodaj zadanie</Button>
    </StyledForm>
  );
};

export default Form;
