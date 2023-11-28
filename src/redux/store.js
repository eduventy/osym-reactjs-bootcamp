import {configureStore} from '@reduxjs/toolkit'

import counterSlice from './slice/CounterSlice'
import todoSlice from './slice/TodoSlice'

const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice
})

export default store