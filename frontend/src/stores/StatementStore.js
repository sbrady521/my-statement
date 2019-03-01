import { decorate, observable } from 'mobx'
const dummyFlow = {
      source: "Dolby",
      amount: 3778 }

class StatementStore {
  user = "Sean Brady"
  inflows = [dummyFlow, dummyFlow, dummyFlow]
}

decorate(StatementStore, {
  user: observable
})

export default new StatementStore