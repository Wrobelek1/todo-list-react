import Form from './Form';
import Tasks from './Tasks';
import Section from './Section';
import Header from './Header';
import Container  from './Container';
import Buttons from './Buttons';
import { useState } from 'react';



function App() {


  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
      {id: 1, content: "zrobic obiad", done: false},
      {id: 2, content: "zjesc obiad", done: true},
  ]);

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({...task, done: true})))
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks, 
    {
      content: newTaskContent,
      done: false,
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    },
  ]);
  };

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return {...task, done : !task.done};
      }
        return task;
    }));
  };

  return (
<Container>
    <Header title="Lista zadań"/>
    <Section 
      title="Dodaj nowe zadanie" 
      body={<Form addNewTask={addNewTask}/>}
    />
    
    <Section 
      title="Lista zadań" 
      body={<Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone}/>}
      extraHeaderContent={
        <Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} setAllDone={setAllDone} />
      }
      />
</Container>
  );
}

export default App;