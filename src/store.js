import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/Tasks/tasksSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store =  configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store;