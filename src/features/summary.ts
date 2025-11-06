import { createSlice } from "@reduxjs/toolkit";
import { SummaryData } from "./response";



export type SummaryProps = {
    _id: string;
    fileId: string;
    originalFileName: string;
    title: string;
    description: string;
    url: string;
    summaries: SummaryData[];
};

type SummaryState = {
    summaries: SummaryProps[] | [];
};

const initialState: SummaryState = {
    summaries: []
}

const summarySlice = createSlice({
    name: "summary",
    initialState,
    reducers: {
        setSummary: (state, action) => {
            state.summaries = action.payload
        }
    }
})

export const { setSummary } = summarySlice.actions;
export default summarySlice.reducer