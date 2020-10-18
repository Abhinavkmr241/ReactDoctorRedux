import React from 'react';
import './ToDoList.css';
import { useSelector, useDispatch } from "react-redux";
import ListElement from './ListElement';
import { IS_ACTIVE, IS_ALL } from '../redux/actions/action-types'

export const ToDoList = () => {

    const itemState = useSelector(state => state);
    const dispatch = useDispatch()
    const payloadAll = { bool: true };
    const payloadAllf = { bool: false};
    const payloadActive = { bool: true };
    const payloadActivef = { bool: false};

    const showAllList = () => {
        dispatch({
            type: IS_ALL,
            payload: payloadAll
        });
        dispatch({
            type: IS_ACTIVE,
            payload: payloadActivef
        });
    }

    const showCompleted = () => {
        dispatch({
            type: IS_ALL,
            payload: payloadAllf
        });
        dispatch({
            type: IS_ACTIVE,
            payload: payloadActivef
        });
    }

    const showActive = () => {
        dispatch({
            type: IS_ALL,
            payload: payloadAllf
        });
        dispatch({
            type: IS_ACTIVE,
            payload: payloadActive
        });
    }

    const allItems = itemState.items.map((item) => {
        if (itemState.isActive) {
            if (item.mark === 'active') {
                return (
                    <ListElement item={item} key={item.key} />
                )
            }
        } else if (itemState.isAll) {
            return (
                <ListElement item={item} key={item.key} />
            )
        } else {
            if (item.mark === 'complete') {
                return (
                    <ListElement item={item} key={item.key} />
                )
            }
        }
    });

    return (
        <div>
            <div className="functionBox">
                <div>
                    <button onClick={showAllList}>All</button>
                </div>
                <div>
                    <button onClick={showActive}>Active</button>
                </div>
                <div>
                    <button onClick={showCompleted}>Completed</button>
                </div>
            </div>
            <div className="listBox">
                {allItems}
            </div>
        </div>
    )
}

export default ToDoList;
