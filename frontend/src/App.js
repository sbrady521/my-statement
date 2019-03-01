import React, { Component } from 'react'
import Statement from './components/Statement'
import User from './types/User'
import StatementTypes from './types/StatementTypes'
import './App.css'
import statementStore from './stores/StatementStore'

const sean = new User('Sean Brady')

class App extends Component {
  render () {
    return (
      <div>
        <Statement store={statementStore} type={StatementTypes.income} user={sean} />
      </div>

    )
  }
}

export default App
