import {configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import weatherReducer from './reducers'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
    logger,

]
const persistConfig = {
    key: "city",
    storage,
    whitelist: ['citiesReducer']
  };
  
const rootReducer = combineReducers({
    cities: persistReducer(persistConfig, weatherReducer),

})

export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === "development",
})

export const persistor = persistStore(store);

setupListeners(store.dispatch)