import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./Reducers/rootReducers";
import createSagaMiddleware from "@redux-saga/core";
import mySaga from "./Sagas";
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducers,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(mySaga);

export default store;
