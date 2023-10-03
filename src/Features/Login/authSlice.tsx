import {PayloadAction, createAsyncThunk , createSlice} from '@reduxjs/toolkit';
import { State } from './model';

const initialState:State ={
    // static data for refernce
    userData:[
        {
            emailId:'chitra.s@abc.com',
            password:'chitra123'
        },
        {
            emailId:'ramya@abc.com',
            password:'ramya123'
        }
    ]
}


export const authSlice = createSlice({
    name:"backlog",
    initialState,
    reducers:{
        setuserData : (state,action:PayloadAction<any>)=>{
          state.userData.push(action.payload);
        },
    },
});

export const {
    setuserData
}=authSlice.actions;

export default authSlice.reducer;