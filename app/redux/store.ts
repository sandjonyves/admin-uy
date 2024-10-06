

// // REDUX IMPORT 

import {configureStore} from "@reduxjs/toolkit"
import { combineReducers } from "redux";

// // REDUCERS
// import authReducer from "@/redux/slices/authSlice";
// import childrenReducer from "@/redux/slices/ChildSlices"
import authReducer from "./slices/authSlice";
import dishesReducer from './slices/dishSlices'
import proteineReducer from './slices/proteineSlices'
import fruitReducer from './slices/fruitSlices'
// // PERSIST THE STORE

import storage from "redux-persist/lib/storage"
import {persistReducer} from 'redux-persist'


const reducer = combineReducers({

    Auth : authReducer,
    Dishes : dishesReducer,
    Proteine : proteineReducer,
    Fruit : fruitReducer
    // children : childrenReducer
})

const persistConfig ={
  key:"root",
  storage,
}

const persistedReducer = persistReducer(persistConfig,reducer)



export const makeStore = () => {
  return configureStore({
    reducer:{persistedReducer}
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']