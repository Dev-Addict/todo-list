import {
    createTodoActionType,
    deleteTodoActionType,
    markTodoDoneActionType,
    removeInitialValueActionType,
    setInitialValueActionType
} from "./types";

export const createTodo = title => {
    return {
        type: createTodoActionType,
        payload: title
    };
};

export const deleteTodo = id => {
    return {
        type: deleteTodoActionType,
        payload: id
    };
};

export const markTodoDone = id => {
    return {
        type: markTodoDoneActionType,
        payload: id
    };
};