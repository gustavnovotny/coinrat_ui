// @flow
import {action, extendObservable} from "mobx"
import {BalanceSocket, balanceSocketInstance} from "./BalanceSocket"
import {Balance} from "./Balance"

class BalanceStore {
  balances: Array<Balance>
  balancesSocket: BalanceSocket

  constructor(balancesSocket: BalanceSocket) {
    this.balancesSocket = balancesSocket

    extendObservable(this, {
      balances: [],
    })
  }

  processBalances = action((balances: Array<Balance>): void => {
    this.balances = balances
  })

  reloadData = action((market: string): void => {
    this.balancesSocket.loadBalances(market, this.processBalances)
  })

}

const balanceStoreInstance: BalanceStore = new BalanceStore(balanceSocketInstance)

export {
  balanceStoreInstance,
  BalanceStore,
}