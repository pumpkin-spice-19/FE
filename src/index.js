import React from "react"
import { render } from "react-dom"
import { App } from "./App"
import { Provider } from "react-redux"
import { BrowserRouter as Router, withRouter } from "react-router-dom"
import store from "./store/store"

const AppWithRouter = withRouter(App)
const app = (
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>
)

render(app, document.getElementById("root"))
