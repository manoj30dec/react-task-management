import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from "./counterSlice";
import bookReducer from "./bookSlice"
import taskReducer from "./taskSlice"

const rootReducers = combineReducers({ 
  counter:counterReducer,
  books:bookReducer,
  tasks:taskReducer
 });
export default rootReducers;
