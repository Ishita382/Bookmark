import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from './Reducers/rootReducers';
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer : rootReducers,
    middleware: () => [sagaMiddleware]
});

export default store;