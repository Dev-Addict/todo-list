import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteTodo, markTodoDone} from "../actions";
import TodoState from "../model/TodoState";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
    }

    doneDiv(todo) {
        if (todo.state === TodoState.todo) {
            return (
                <div className="todo-list-todo-done"
                     onClick={() => {
                         this.props.markTodoDone(todo.id);
                     }}>
                    <i className="check icon"/>
                </div>
            );
        }
        return null;
    }

    renderList() {

        return Object.values(this.props.todoList).map(todo => {
            return (
                <div className="todo-list-todo-container" key={todo.id}>
                    <div
                        className={`todo-list-todo-content 
                        ${todo.state === TodoState.done ? 'todo-list-todo-content-done' : ''}`}>
                        {todo.title}
                    </div>
                    <div className="todo-list-todo-actions">
                        {this.doneDiv(todo)}
                        <div className="todo-list-todo-delete"
                             onClick={() => {
                                 this.props.deleteTodo(todo.id);
                             }}>
                            <i className="close icon"/>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        todoList: state.todoList
    };
};

export default connect(mapStateToProps, {deleteTodo, markTodoDone})(TodoList);