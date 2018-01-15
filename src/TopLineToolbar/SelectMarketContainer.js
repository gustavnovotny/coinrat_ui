// @flow
import React, {Component} from 'react'
import {observer} from "mobx-react"
import {filterStoreInstance} from "./FilterStore"
import SelectMarketComponent from "../Market/SelectMarketComponent"
import {marketStoreInstance} from "../Market/MarketStore"
import {pairStoreInstance} from "../Pair/PairStore"

class SelectMarketContainer extends Component<{}> {

  componentDidMount() {
    marketStoreInstance.reloadData()
  }

  changeMarket = (market: string) => {
    filterStoreInstance.changeMarket(market)
    pairStoreInstance.reloadData(market)
  }

  render = () => {
    return <SelectMarketComponent
      availableMarkets={marketStoreInstance.markets}
      defaultSelectedMarket={filterStoreInstance.market}
      onSelect={this.changeMarket}
    />
  }
}

export default observer(SelectMarketContainer)
