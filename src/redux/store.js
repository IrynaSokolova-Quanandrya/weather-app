import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {setupListener} from '@reduxjs/toolkit/query'
import {cityApi} from './slice'
import {
    // persistStore,
    // persistReducer,
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
    logger,
]

// const persistConfig = {
//     key: 'city',
//     storage,
    
// }

export const store = configureStore({
    reducer:{
        [cityApi.reducerPath]: cityApi.reducer
        // cities: persistReducer(persistConfig, citiesReduser) 
    },
    middleware,
    devTools: process.env.NODE_ENV === "development",
})

setupListener(store.dispatch)
// export const persistor = persistStore(store)