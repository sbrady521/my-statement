import { decorate, observable, computed } from 'mobx'
import FinancialGridStore from './FinancialGridStore'

const defaultItem = {
  name: 'Asset or Source',
  amount: 0
}

const defaultGrid = new FinancialGridStore
defaultGrid.title = 'Sub-grid Title'
defaultGrid.items.push(defaultItem)

class StatementStore {
  user = 'Your Name'
  statementTitle = 'Statement Title'
  statementDate = 'DD/MM/YYYY'
  financialGrids = [defaultGrid]
}

decorate(StatementStore, {
  user: observable,
  statementTitle: observable,
  statementDate: observable,
  financialGrids: observable,
})

export default new StatementStore