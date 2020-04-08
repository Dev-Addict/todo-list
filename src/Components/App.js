import React, {Component} from 'react';

import Header from "./Header";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <TodoForm/>
                <TodoList/>
            </div>
        );
    }
}

export default App;
