import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers';
const store = configureStore({
  reducer: rootReducers
});
// window.store = store;
export default store;
