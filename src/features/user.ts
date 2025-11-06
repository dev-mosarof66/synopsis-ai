import { createSlice } from "@reduxjs/toolkit";
import { ResponseItem } from "./response";


export type userProps = {
    _id: string;
    emall: string;
    summaries: ResponseItem[];
    freeLimit: number;
    currentPlan: string;
    createdAt: string;
};


type userState = {
    user: userProps | null;
};

const initialState: userState = {
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
