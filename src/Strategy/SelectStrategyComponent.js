// @flow
import React, {Component} from "react"
import {observer} from "mobx-react/index"
import {SelectComponent, SelectElement} from "../SelectComponent"
import {FilterStore} from "../TopLineToolbar/FilterStore"

type Props = {
  store: FilterStore,
}

const SelectStrategyComponent = observer(class SelectStrategyComponent extends Component {
  props: Props

  handleValueChange = (pair: SelectElement) => {
    this.props.store.changeSelectedStrategy(pair.key)
  }

  render() {
    const strategies = {
      'double_crossover': {key: 'double_crossover', title: 'Double Crossover'}
    }
    const item = strategies[this.props.store.selectedStrategy]
    return <SelectComponent label="Strategy" items={strategies} selectedItem={item} onChange={this.handleValueChange}/>
  }
})

export default SelectStrategyComponent
