import React, { Component } from 'react';
import Statement from './components/Statement'
import User from './types/User';
import StatementTypes from './types/StatementTypes'
import './App.css';

const sean = new User("Sean Brady");

class App extends Component {
    render() {
        return (
            <div>
                <Statement type={StatementTypes.income} user={sean}/>
            </div>

        );
    }
}

export default App;
