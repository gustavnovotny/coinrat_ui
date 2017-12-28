import {extendObservable} from "mobx"

class FilterStore {
  constructor() {

    let since = new Date()
    since.setHours(since.getHours() - 2)

    extendObservable(this, {
      selectedPair: 'USD_BTC',
      selectedMarket: 'bittrex',
      selectedInterval: {since: since, till: null}
    })

  }

  changeSelectedPair(pair) {
    this.selectedPair = pair
  }

  changeSelectedMarket(market) {
    this.selectedMarket = market
  }

  changeSelectedInterval(interval) {
    this.selectedInterval = interval
  }
}

const filterStore = new FilterStore()

export default filterStore
