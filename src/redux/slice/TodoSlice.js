import { createSlice } from "@reduxjs/toolkit";

//const ...

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: [],
  reducers: {
    loadTask: (state, action) => {
      return action.payload;
    },
    addTask: (state, action) => {
      state.push(action.payload);
    },
    doneTask: (state, action) => {
      state.filter((todo) =>
        todo.id === action.payload.id
          ? (todo.status = action.payload.status)
          : true
      );
    },
    removeTask: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    filteredTasks: (state, action) => {},
  },
});

export const { addTask, doneTask, removeTask, filteredTasks, loadTask } =
  todoSlice.actions;
export default todoSlice.reducer;
