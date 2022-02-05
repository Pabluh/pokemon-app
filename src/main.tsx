import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { ReactQueryDevtools } from "react-query-devtools"

ReactDOM.render(
  <React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
