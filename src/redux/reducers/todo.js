import {
    ADD_TODO,
    UPDATE_TODO,
    MARK_TODO,
    UNMARK_TODO,
    DELETE_TODO,
    EDIT_TODO,
    IS_ACTIVE,
    IS_ALL
} from '../actions/action-types';

const todoInitialState = {
    currentItem: {
        text: '',
        key: '',
        mark: ''
    },
    items: [],
    isActive: false,
    isAll: true
}

export const todoReducer = (
    state = todoInitialState,
    action
) => {
    let newState = { ...state };
    switch (action.type) {
        case ADD_TODO: {
            newState.currentItem = {
                text: action.payload.currentItem.text,
                key: action.payload.currentItem.key,
                mark: action.payload.currentItem.mark
            }
            break;
        }
        case UPDATE_TODO: {
            newState.items.push(action.payload.newTodo)
            newState.currentItem = {
                text: '',
                key: '',
                mark: ''
            }
            break;
        }
        case MARK_TODO: {
            newState.items.map((item) => {
                if (item.key === action.payload.key) {
                    item.mark = 'complete'
                }
            })
            break;
        }
        case UNMARK_TODO: {
            newState.items.map((item) => {
                if (item.key === action.payload.key) {
                    item.mark = 'active'
                }
            })
            break;
        }
        case DELETE_TODO: {
            newState.items = newState.items.filter(item => item.key !== action.payload.key)
            break;
        }
        case EDIT_TODO: {
            newState.items.map((item) => {
                if (item.key === action.payload.editedItem.key) {
                    item.text = action.payload.editedItem.text
                }
            })
            break;
        }
        case IS_ACTIVE: {
            newState.isActive = action.payload.bool
            break;
        }
        case IS_ALL: {
            newState.isAll = action.payload.bool
            break;
        }
        default: {}
    }
    return newState;
};