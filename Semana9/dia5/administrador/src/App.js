import { BrowserRouter as Router, Switch } from "react-router-dom"
import Routes from "./Routes"

export default function App() {
  return (
    <Router>
      <div className="Container p-3">
      <Switch>
        <Routes />
      </Switch>
      </div>
    </Router>
  )
}
