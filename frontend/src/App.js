import React, { Component } from 'react'
import IncomeStatement from './components/IncomeStatement'
import statementStore from './stores/StatementStore'

class App extends Component {
  render () {
    return (
      <div>
        <IncomeStatement store={statementStore} />
      </div>

    )
  }
}

export default App
