import { configureStore } from "@reduxjs/toolkit";
import imageSlice from './images-slice';

const store = configureStore({
    reducer: { image:imageSlice.reducer }
}); 
export default store; 