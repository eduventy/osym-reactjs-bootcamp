import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: {
        count: 0
    },
    reducers: {
        increase: (state, action) => {
            state.count += action.payload
        },
        decrase: (state, action) => {
            if (state.count>0){

                state.count -=action.payload
            }
        }
    }
})

export const {increase, decrase} = counterSlice.actions
export default counterSlice.reducer