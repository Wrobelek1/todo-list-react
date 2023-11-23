import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({tasks}, {payload}) => {
      tasks.push(payload);
    },
    toggleHideDone: (state) => {
        state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({tasks}, {payload}) => {
        const index = tasks.findIndex(({id}) => id === payload);
        tasks[index].done = !tasks[index].done
    },
    removeTask: ({tasks}, {payload}) => {
        const index = tasks.findIndex(({id}) => id === payload);
        tasks.splice(index, 1);
    },
    setAllDone: ({tasks}) => {
        for (const task of tasks) {
            task.done = true;
        }
    },
    fetchExampleTasks: () => {

    },
    setTasks: (state, {payload}) => {
      state.tasks = payload;
    },
  },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasksState = state => state.tasks; 

export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({done}) => done)
export default tasksSlice.reducer;
