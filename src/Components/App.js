import React, {Component} from 'react';

import Header from "./Header";
import TodoForm from "./TodoForm";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <TodoForm/>
            </div>
        );
    }
}

export default App;
