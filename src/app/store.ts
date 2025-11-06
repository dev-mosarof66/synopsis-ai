import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/user"; 
import responseReducer from "@/features/response"; 
import summaryReducer from "@/features/summary"; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    response: responseReducer,
    summary: summaryReducer
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
