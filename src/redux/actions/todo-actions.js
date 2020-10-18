import {
    ADD_TODO,
    UPDATE_TODO,
    MARK_TODO,
    UNMARK_TODO,
    DELETE_TODO,
    EDIT_TODO,
    IS_ACTIVE,
    IS_ALL
} from "./action-types";

export const addTodo = currentTodo => {
    return {
        type: ADD_TODO,
        payload: currentTodo
    }
}

export const updateTodo = newTodo => {
    return {
        type: UPDATE_TODO,
        payload: newTodo
    }
}

export const markTodo = key => {
    return {
        type: MARK_TODO,
        payload: {
            key
        }
    }
}

export const unmarkTodo = key => {
    return {
        type: UNMARK_TODO,
        payload: {
            key
        }
    }
}

export const deleteTodo = key => {
    return {
        type: DELETE_TODO,
        payload: {
            key
        }
    }
}

export const editTodo = editedItem => {
    return {
        type: EDIT_TODO,
        payload: editedItem
    }
}

export const setIsActive = bool => {
    return {
        type: IS_ACTIVE,
        payload: {
            bool
        }
    }
}

export const setIsAll = bool => {
    return {
        type: IS_ALL,
        payload: {
            bool
        }
    }
}