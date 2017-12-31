// @flow
import React, {Component} from "react"
import {observer} from "mobx-react/index"
import {SelectComponent, SelectElement} from "../SelectComponent"
import {FilterStore} from "../TopLineToolbar/FilterStore"

type Props = {
  store: FilterStore,
}

const SelectOrderBackendStorageComponent = observer(class SelectOrderBackendStorageComponent extends Component<Props> {
  props: Props

  handleValueChange = (orderStorage: SelectElement) => {
    this.props.store.changeSelectedOrderStorage(orderStorage.key)
  }

  render() {
    const orderBackendStorages = {
      'influx_db': {key: 'influx_db', title: 'Influx DB'},
      'memory': {key: 'memory', title: 'In memory'},
    }
    const item = orderBackendStorages[this.props.store.selectedOrderStorage]
    return <SelectComponent
      label="Order storage"
      items={orderBackendStorages}
      selectedItem={item}
      onChange={this.handleValueChange}
    />
  }
})

export default SelectOrderBackendStorageComponent