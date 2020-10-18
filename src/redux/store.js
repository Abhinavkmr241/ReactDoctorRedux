import { createStore, applyMiddleware } from "redux";
import { formValidateReducer } from './reducers';
import logger from "redux-logger";

export const store = createStore(
    formValidateReducer,
    applyMiddleware(logger)
);