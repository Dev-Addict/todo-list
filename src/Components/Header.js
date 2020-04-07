import React, {Component} from 'react';

import '../style/Components/Header.css';

class Header extends Component{
    render() {
        return (
            <div className="header-container">
                <span className="header-todo-content">ToDo</span> List
            </div>
        );
    }
}

export default Header;