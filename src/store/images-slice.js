import { createSlice } from "@reduxjs/toolkit";

const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: []
    },
    reducers: {
        addImageToImages(state, action) {
            const newItem = action.payload;
            state.images = newItem;
        },
    }
});
export const imagesActions = imageSlice.actions;
export default imageSlice;