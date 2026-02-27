import { configureStore, createAsyncThunk } from '@reduxjs/toolkit';
import rootReducers from './reducers';
// Custom middleware
const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching:", action);
  const result = next(action);
  console.log("Next State:", store.getState());
  return result;
};
// Async action
// export const incrementAsync = createAsyncThunk(
//   "counter/incrementAsync",
//   async () => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return 1;
//   }
// );

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
});
// window.store = store;
export default store;
