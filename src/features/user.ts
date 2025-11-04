import { createSlice } from "@reduxjs/toolkit";
import { SummaryItem } from "./summary";



export type userProps = {
    emall: string | null;
    isNewUser: boolean;
    summaries: SummaryItem[] | [] ;
    currentPlan: string;

};


type userState = {
    user: userProps | null;
};

const initialState: userState = {
    user:  null,
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
