import React, { Component } from 'react';
import { connect } from "react-redux";
import './ToDo.css';
import ToDoList from './ToDoList'
import { addTodo } from '../redux/actions/todo-actions'
import { updateTodo } from '../redux/actions/todo-actions';
import { markTodo } from '../redux/actions/todo-actions';
import { unmarkTodo } from '../redux/actions/todo-actions';

class ToDo extends Component {
    
    handleInput = (e) => {
        let currentItem = {
            text: e.target.value,
            key: Date.now(),
            mark: 'active'
        }
        if (currentItem.text.trim().length) {
            this.props.addTodo({currentItem});
        } else {
            console.log("Enter something!!!");
        }
    }

    addITem = (e) => {
        e.preventDefault();
        const newTodo = this.props.itemState.currentItem;
        this.props.updateTodo({newTodo});
    }

    markAll = () => {
        const cb = document.getElementById('markAll');
        if (cb.checked) {
            this.props.itemState.items.map((item) => {
                this.props.markTodo(item.key);
            })
        } else {
            this.props.itemState.items.map((item) => {
                this.props.unmarkTodo(item.key);
            })
        }
    }

    render() {
        return (
            <div className="background">
                <h1><strong>To Do</strong></h1>
                <div className="todoBody">
                    <form onSubmit= {this.addITem}>
                        <input type="text" placeholder="Enter what to do...?!"
                            className="inputText"
                            value={this.props.itemState.currentItem.text}
                            onChange= {this.handleInput} 
                        />
                        <button type="submit" className="addButton" ><strong>Add</strong></button>
                    </form>
                    <input type="checkbox" id="markAll" onClick={this.markAll} />
                    <label><strong>Mark All</strong></label>
                    <ToDoList />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        itemState: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (currentTodo) => dispatch(addTodo(currentTodo)),
        updateTodo: (newTodo) => dispatch(updateTodo(newTodo)),
        markTodo: (key) => dispatch(markTodo(key)),
        unmarkTodo: (key) => dispatch(unmarkTodo(key))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
