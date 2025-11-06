/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";


export type SummaryData = {
  title: string;
  description: string[];
};

export type ResponseItem = {
  _id: string;
  fileId: string;
  originalFileName:string;
  title:string;
  description:string;
  url: string;
  summaries: SummaryData[];
};

type SummaryState = {
  response: ResponseItem | null;
};

const initialState: SummaryState = {
  response: null,
};

const responseSlice = createSlice({
  name: "response",
  initialState,
  reducers: {
    setResponse: (
      state,
      action: any
    ) => {
      state.response = action.payload;
    },
  },
});

export const { setResponse } = responseSlice.actions;
export default responseSlice.reducer;
