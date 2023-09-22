import {PayloadAction, createAsyncThunk , createSlice} from '@reduxjs/toolkit';
import { State } from './model';

const initialState:State ={
    // static data for refernce
    backlogData:[{
        title: "Create Login Screen",
        description:"" ,
        storypoints:"",
        tag:"SIT/UAT TESTING",
        id:1,
        assignee:"",
        profileUrl:"",
        ticketNo:"TM-1",
        createDate:"",
        label:"",
        epic:"",
        version:"",
       },
     {
        title: "Develop and integrate Login Screen",
        description:"" ,
        storypoints:"",
        tag:"IN PROGRESS",
        id:2,
        assignee:"",
        profileUrl:"",
        ticketNo:"TM-2",
        createDate:"",
        label:"",
        epic:"",
        version:"",
       },
     
     {
        title: "API Integration for Login screen",
        description:"" ,
        storypoints:"",
        tag:"READY FOR DEV",
        id:3,
        assignee:"",
        profileUrl:"",
        ticketNo:"TM-3",
        createDate:"",
        label:"",
        epic:"",
        version:"",
       },
     
     {
        title: "Develop Register UI Screen",
        description:"" ,
        storypoints:"",
        tag:"UNIT TESTING",
        id:4,
        assignee:"",
        profileUrl:"",
        ticketNo:"TM-4",
        createDate:"",
        label:"",
        epic:"",
        version:"",
       },
     {
        title: "Create TaskManagemnt Backlog Screen",
        description:"" ,
        storypoints:"",
        tag:"CODE REVIEW",
        id:5,
        assignee:"",
        profileUrl:"",
        ticketNo:"TM-5",
        createDate:"",
        label:"",
        epic:"",
        version:"",
       }],
       saveTicketId:0
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
        }
    },
});

export const {
  setBacklogData,
  setTicketId,
  storeBacklogData
}=backlogSlice.actions;

export default backlogSlice.reducer;