import {configureStore} from '@reduxjs/toolkit'

import counterSlice from './slice/CounterSlice'

const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})

export default store