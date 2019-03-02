import { decorate, observable, computed } from 'mobx'
import FinancialGridStore from './FinancialGridStore'
const dummyFlow = {
      name: "Dolby",
      amount: 3778 }

const inflows = new FinancialGridStore
inflows.title = "Inflows"
inflows.items.push(dummyFlow)
inflows.items.push(dummyFlow)
inflows.items.push(dummyFlow)
inflows.items.push(dummyFlow)

const outflows = new FinancialGridStore
outflows.title = "Outflows"
outflows.items.push(dummyFlow)
outflows.items.push(dummyFlow)
outflows.items.push(dummyFlow)
outflows.items.push(dummyFlow)

class StatementStore {
  user = 'Your Name'
  statementTitle = 'Statement Title'
  statementDate = 'DD/MM/YYYY'
  financialGrids = [inflows, outflows]
}

decorate(StatementStore, {
  user: observable,
  statementTitle: observable,
  statementDate: observable,
  financialGrids: observable,
})

export default new StatementStore