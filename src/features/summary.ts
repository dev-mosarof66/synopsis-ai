/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";


export type SummaryData = {
  title: string;
  description: string[];
};

export type SummaryItem = {
  _id: string;
  fileId: string;
  url: string;
  summaries: SummaryData[];
};

type SummaryState = {
  pdfSummary: SummaryItem | null;
};

const initialState: SummaryState = {
  pdfSummary: null,
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setSummary: (
      state,
      action: any
    ) => {
      state.pdfSummary = action.payload;
    },
  },
});

export const { setSummary } = summarySlice.actions;
export default summarySlice.reducer;
