import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
};

const error = createSlice({
    name: "error",
    initialState,
    reducers: {
        setMessage(state, action) {
            state.message = action.payload.message
        },
        clearMessage(state, action) {
            state.message = ""
        }
    },
});

export const ErrorActions = error.actions;

export const ErrorSelectors = {
    message: (state) => state.error.message
};


export default error.reducer;
