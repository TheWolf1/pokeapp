import { createSlice } from "@reduxjs/toolkit";




export const userName = createSlice({
    name:'userName',
    initialState:'',
    reducers:{
        setUserName:(state, action)=> action.payload
    }
});


export const {setUserName} = userName.actions
export default userName.reducer
