import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import {setupListeners} from "@reduxjs/toolkit/dist/query";
import backlogSlice from "../Features/Backlog/backlogSlice";
import authSlice from "../Features/Login/authSlice";

export const store=configureStore({
    reducer:{
        backlog:backlogSlice,
        auth:authSlice,
    }
});
setupListeners(store.dispatch);
export type RootState=ReturnType<typeof store.getState>;

export type AppDispatch=typeof store.dispatch;
export const useAppDispatch=()=>useDispatch<AppDispatch>();
