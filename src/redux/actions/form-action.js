import { 
    ADD_BASIC,
    ADD_TIMING,
    ADD_LIST
} from './action-types';

export const addBasicInfo = basicForm => {
    return {
        type: ADD_BASIC,
        payload: basicForm
    }
}

export const addtimingInfo = timingForm => {
    return {
        type: ADD_TIMING,
        payload: timingForm
    }
}

export const addToList = data => {
    return {
        type: ADD_LIST,
        payload: data
    }
}