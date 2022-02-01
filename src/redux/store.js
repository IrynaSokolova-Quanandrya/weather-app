import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {cityApi} from './slice'
import {
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

export const store = configureStore({
    reducer:{
        [cityApi.reducerPath]: cityApi.reducer
    },
    middleware,
    devTools: process.env.NODE_ENV === "development",
})

setupListeners(store.dispatch)
