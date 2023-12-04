import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTasks } from "@/services/todo";

export const fetchTasks = createAsyncThunk("todo/fetchTasks", async () => {
  return getTasks();
});

export const createTask = createAsyncThunk(
  "todo/createTask",
  async (payload) => {
    const url = "https://kokpit.smartlimon.com/items/bootcamp_todo";
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).then((resp) => resp.json());
  }
);

//const ...

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: {
    isLoading: false,
    data: [],
  },
  reducers: {
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
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      console.log(action, state);
      state.isLoading = true;
    }),
      builder.addCase(fetchTasks.fulfilled, (state, action) => {
        console.log(action, state);
        state.isLoading = false;
        state.data = action.payload.data.data;
      }),
      builder.addCase(fetchTasks.rejected, (state, action) => {
        console.log(action, state);
      }),
      builder.addCase(createTask.pending, (state, action) => {
        console.log(action, state);
      }),
      builder.addCase(createTask.fulfilled, (state, action) => {
        console.log(action, state);
        state.data.push(action.payload.data);
      }),
      builder.addCase(createTask.rejected, (state, action) => {
        console.log(action, state);
      });
  },
});

export const { doneTask, removeTask, filteredTasks } = todoSlice.actions;
export default todoSlice.reducer;
