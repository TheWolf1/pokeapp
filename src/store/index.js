import { configureStore } from "@reduxjs/toolkit";
import userNameGlobal from './slices/userName.slice';

export default configureStore({
    reducer:{
        userNameGlobal
    }
});