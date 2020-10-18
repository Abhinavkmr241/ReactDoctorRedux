import { 
    ADD_DATA, 
    CHANGE_DIRTY, 
    ADD_ID, 
    UPDATE_LIST, 
    ADD_ERROR 
} from './action-types';

export const addField = element => {
    return {
        type: ADD_DATA,
        payload: element
    }
}

export const changeDirty = element => {
    return {
        type: CHANGE_DIRTY,
        payload: element
    }
}

export const addId = id => {
    return {
        type: ADD_ID,
        payload: {
            id
        }
    }
}

export const addError = element => {
    return {
        type: ADD_ERROR,
        payload: element
    }
}

export const updateList = data => {
    return {
        type: UPDATE_LIST,
        payload: data
    }
}