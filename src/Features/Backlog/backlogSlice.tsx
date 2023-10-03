import {PayloadAction, createAsyncThunk , createSlice} from '@reduxjs/toolkit';
import { State } from './model';

const initialState:State ={
    // static data for refernce
    backlogData:[],
    saveTicketId:0,
}

export const backlogSlice = createSlice({
    name:"backlog",
    initialState,
    reducers:{
        setBacklogData : (state,action:PayloadAction<any>)=>{
          state.backlogData.push(action.payload)
        },
        storeBacklogData : (state,action:PayloadAction<any>)=>{
          console.log(action.payload)
          state.backlogData=action.payload;
        },
        setTicketId: (state,action:PayloadAction<any>)=>{
          state.saveTicketId=action.payload
        },
      
    },
});

export const {
  setBacklogData,
  setTicketId,
  storeBacklogData,
}=backlogSlice.actions;

export default backlogSlice.reducer;