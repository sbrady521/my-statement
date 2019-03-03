import { decorate, observable, computed } from 'mobx'

class financialGridStore {
  constructor () {
    this.title = 'Title'
    this.items = new Map()
  }

  get total () {
    let sum = 0
    for (let [key, val] of this.items) {
      if (!isNaN(val.amount) && val.amount !== '') {
        sum += parseInt(val.amount)
      } else if (val.title !== undefined) {
        sum += val.total
      } else {
        console.error('Encountered unrecognized grid item: ' + JSON.stringify(val))
        console.log(val.amount)
      }
    }
    return sum
  }
}

decorate(financialGridStore, {
  title: observable,
  items: observable,
  total: computed
})

export default financialGridStore
