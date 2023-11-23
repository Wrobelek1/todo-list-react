import { Wrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
  fetchExampleTasks,
} from "../tasksSlice";

const Buttons = () => {
  const dispatch = useDispatch();
  const hideDone = useSelector(selectHideDone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Dodaj przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};
export default Buttons;
