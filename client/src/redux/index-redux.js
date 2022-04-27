import { configureStore } from '@reduxjs/toolkit';

import pennintouchReducer from "./pennintouch-data.js";
import { persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk'

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, pennintouchReducer);

const store = configureStore({
  reducer: { pennintouchData : persistedReducer },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});


export default store;