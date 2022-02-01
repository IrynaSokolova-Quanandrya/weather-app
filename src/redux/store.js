import {configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {cityApi} from './slice'
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
    cityApi.middleware,
    // logger,
]
const persistConfig = {
    key: "contacts",
    storage,
  };

const rootReducer = combineReducers({
[cityApi.reducerPath]: persistReducer(persistConfig, cityApi.reducer)
})

export const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === "development",
})

export const persistor = persistStore(store);
setupListeners(store.dispatch)
