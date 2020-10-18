import { createStore, applyMiddleware } from "redux";
import { todoReducer } from './reducers';

export const store = createStore(
    todoReducer,
    undefined
);
