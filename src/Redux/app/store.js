import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import getdataReducers from "../features/socialSlice";
import getimageReducers from "../features/imageSlice";
let store=configureStore({
    reducer:{
        getdata:getdataReducers,
        getimage:getimageReducers,
    }
})

export default store;