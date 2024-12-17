import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counterRedux/counterSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer, // Counter slice ko store ke saath connect karte hain

    }
})