import Form from "./Form";
import TasksList from "./TasksList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Buttons from "./Buttons";
import Search from "./Search";
import { Button } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";





function TasksPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading)
  
  return (
    <Container>
      <Header title="Lista zadań"/>
      <Section title="Dodaj nowe zadanie" extraHeaderContent={
      <Button disabled={loading} 
      onClick={() => dispatch(fetchExampleTasks())}>
        {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>}
       body={<Form />} />
      <Section title="Wyszukiwarka" body={<Search />} />
      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
