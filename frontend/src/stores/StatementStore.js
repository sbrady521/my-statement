import { decorate, observable } from 'mobx'
import FinancialGridStore from './FinancialGridStore'

const defaultItem = {
  name: 'Asset or Source',
  amount: 0
}

class StatementStore {
  constructor () {
    this.user = 'Your Name'
    this.statementTitle = 'Statement Title'
    this.statementDate = 'DD/MM/YYYY'

    const defaultGrid = new FinancialGridStore()
    defaultGrid.title = 'Sub-grid Title'
    defaultGrid.items.set(-1, defaultItem)
    this.financialGrids = new Map()
    this.financialGrids.set(-1, defaultGrid)
  }
}

decorate(StatementStore, {
  user: observable,
  statementTitle: observable,
  statementDate: observable,
  financialGrids: observable
})

export default new StatementStore()
