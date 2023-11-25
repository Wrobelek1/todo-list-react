import {select, takeLatest, call, put, takeEvery, delay} from "redux-saga/effects";

import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasksError, fetchExampleTasksSuccess, selectTasks} from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try{
        yield delay(1000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(exampleTasks));
    } catch(error) {
        yield put(fetchExampleTasksError());
        yield call(alert, "Coś poszło nie tak!");
    }
}

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call (saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasksSuccess.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler)
}