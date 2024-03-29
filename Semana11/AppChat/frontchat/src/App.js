import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Chat from "./components/Chat"
import Join from "./components/Joint"

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path='/' exact component={Join} />
          <Route path='/chat' component={Chat} />
        </Switch>
    </Router>
  )
}
