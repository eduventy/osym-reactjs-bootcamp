import {createSlice} from '@reduxjs/toolkit'

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: [
        {text:'Kitap oku', status:'todo'},
        {text:'Motosiklet sür', status:'done'}
    ],
    reducers: {
        addTask: (state, action) => {
            console.log(action.payload)
            state.push(action.payload)
        },
        doneTask: (state, action) => {
            state.filter(todo=>todo.text===action.payload.text ? todo.status = 'done' : true)
        },
        removeTask: (state, action) => {

        },
        filteredTasks: (state, action) => {

        }
    }
})


export const {addTask, doneTask, removeTask, filteredTasks} = todoSlice.actions
export default todoSlice.reducer