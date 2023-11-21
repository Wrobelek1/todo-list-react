import { useRef, useState } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
      inputRef.current.focus();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
          return;
        }

        addNewTask(trimmedNewTaskContent);
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
