import { configureStore } from '@reduxjs/toolkit';

import pennintouchReducer from "./pennintouch-data.js";

const store = configureStore({
  reducer: {
    pennintouchData: pennintouchReducer,
  },
});

export default store;