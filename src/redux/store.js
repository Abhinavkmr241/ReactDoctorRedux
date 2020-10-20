import { createStore, applyMiddleware } from "redux";
import { formReducer } from './reducers';
import logger from "redux-logger";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    keyPrefix: "",
    stateReconciler: hardSet
}

const pReducer = persistReducer(persistConfig, formReducer);

export const store = createStore(
    pReducer,
    undefined,
    applyMiddleware(logger)
);

export const persistor = persistStore(store);