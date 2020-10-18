import React from 'react';
import './ListElement.css';
import { useDispatch } from "react-redux";
import { DELETE_TODO, EDIT_TODO, MARK_TODO, UNMARK_TODO } from '../redux/actions/action-types';

export const ListElement = (item) => {
    const dispatch = useDispatch()

    const markItem = () => {
        const cb = document.getElementById(item.item.key)
        let payload = {
            key: item.item.key
        }
        if (cb.checked) {
            dispatch({
                type: MARK_TODO,
                payload: payload
            })
        } else {
            dispatch({
                type: UNMARK_TODO,
                payload: payload
            })
        }
    }

    const deleteItem = () => {
        let payload = {
            key: item.item.key
        }
        dispatch({
            type: DELETE_TODO,
            payload: payload
        });
    }

    const editText = (e) => {
        let payload = {
            text: e.target.value,
            key: item.item.key
        }
        dispatch({
            type: EDIT_TODO,
            payload: { editedItem: payload }
        })
    }

    return (
        <div className={(item.item.mark === 'active') ? 'element' : 'markElement' }>
            <input type='checkbox' id={item.item.key}
                onClick={markItem}
                checked={item.item.mark === 'complete'}
            />
            <input type="text" className="inputBox" value={item.item.text}
                onChange={editText}
                disabled={(item.item.mark === 'complete') ? true : false} />
            <button className="deleteButton" onClick={deleteItem}><strong>X</strong></button>
        </div>
    )
}

export default ListElement
