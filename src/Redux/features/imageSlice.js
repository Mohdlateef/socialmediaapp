import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let intailState={
    loading:false,
    data:'',
    error:'',
}

let getImage=createSlice({
    name:"getimage",
    initialState:intailState,
    reducers:{
        ApiStart:(state)=>{state.loading=true},
        ApiSucess:(state,action)=>{
            state.loading=false;
            state.data=action.payload;
            state.error=''
        },
        Apifailure:(state,action)=>{
            state.loading=false;
            state.data='';
            state.error=action.payload;
        }
    }
})
export let{ApiStart,ApiSucess,Apifailure}=getImage.actions;
const getimageReducers=getImage.reducer;
export function fetchimage(iteam_id){
    return async(dispatch)=>{
        console.log(iteam_id)
        dispatch(getImage.actions.ApiStart());
        try{
            const response=await axios.get(`https://picsum.photos/200?random=${iteam_id}`);
            console.log(response.config)
            dispatch(ApiSucess(response.config));
        }catch(error){
            dispatch(Apifailure(error));

        }
    }
}
export default getimageReducers;