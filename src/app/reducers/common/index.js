import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { http } from "../../api/http";

const initialState = {
    menu: null
};

const path = (str) => ("/api/v1/common" + str)

export const CommonAPI = {
    getUserMenu: createAsyncThunk("common/mainMenu", async () => {
        const res = await http.get(path("/main-menu"))
        return res.data
    }),
}

const common = createSlice({
    name: "common",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

        builder.addCase(CommonAPI.getUserMenu.fulfilled, (state, action) => {
            state.menu = action.payload
        });

    },
});

export const CommonSelectors = {
    menu: state => state.common.menu
}
export const CommonActions = common.actions;


export default common.reducer;
