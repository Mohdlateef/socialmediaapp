import { createSlice } from "@reduxjs/toolkit";

// import axios from
import axios from "axios";

let intailState={
    loading:false,
    data:[],
    error:[],
}

let getdata=createSlice({
    name:"getdata",
    initialState:intailState,
    reducers:{
        ApiStart:(state)=>{state.loading=true},
        ApiSucess:(state,action)=>{
            state.loading=false;
            state.data=action.payload;
            state.error=[]
        },
        Apifailure:(state,action)=>{
            state.loading=false;
            state.data=[];
            state.error=action.payload;
        }
    }
})
export let{ApiStart,ApiSucess,Apifailure}=getdata.actions;
const getdataReducers=getdata.reducer;
export function fetchdata(){
    return async(dispatch)=>{
        dispatch(getdata.actions.ApiStart());
        try{
            const response=await axios.get("https://jsonplaceholder.typicode.com/posts");
            dispatch(ApiSucess(response.data));
        }catch(error){
            dispatch(Apifailure(error));

        }
    }
}
export default getdataReducers;
