import {createTodoActionType, deleteTodoActionType, markTodoDoneActionType} from "../actions/types";
import TodoState from "../model/TodoState";

export default (state = {}, action) => {
    if (action.type === createTodoActionType) {
        const newState = {...state};
        newState[new Date().getTime()] = {
            title: action.payload,
            state: TodoState.todo
        };
        return newState
    }
    if (action.type === deleteTodoActionType) {
        const newState = {...state};
        delete newState[action.payload];
        return newState;
    }
    if (action.type === markTodoDoneActionType) {
        const newState = {...state};
        newState[action.payload] = {...newState[action.payload], state: TodoState.done};
        return newState;
    }
    return state;
}