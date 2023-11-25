import { List, Item, Content, Button, StyledLink} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useQueryParameter } from "../../queryParameters";


const TasksList = () => {
  const query = useQueryParameter("szukaj");
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  
  const dispatch = useDispatch();
  

  return (
    <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button
          $toggledone
          onClick={() => dispatch(toggleTaskDone(task.id))}
        >
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
        </Content>
        <Button
          $deleteTask
          onClick={() => dispatch(removeTask(task.id))}
        >
          🗑
        </Button>
      </Item>
    ))}
  </List>
  )
};

export default TasksList;
