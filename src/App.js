// @flow
import React, {Component} from 'react'
import {BrowserRouter, Route} from "react-router-dom"

import HeaderComponent from "./HeaderComponent"
import DashboardComponent from "./DashboardComponent"
import SocketEventLogComponent from "./Sockets/SocketEventLog/SocketEventLogComponent"
import {observer} from "mobx-react"

class App extends Component<{}> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderComponent/>
          <div className="main-content" style={{padding: "1em"}}>
            <div className="workspace">
              <Route exact path="/" component={DashboardComponent}/>
              <Route path="/socket-event-log" component={SocketEventLogComponent}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default observer(App)
