import { decorate, observable, computed } from 'mobx'

class financialGridStore {
  constructor () {
    this.title = 'Title'
    this.items = new Map()
  }

  get total () {
    let sum = 0
    for(let i = 0 ; i < this.items.length ; i++) {
      if(this.items[i].amount) {
        sum += this.items[i].amount
      } else if(this.items[i].title) {
        sum += this.items[i].total
      } else {
        console.error('Encountered unrecognized grid item')
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