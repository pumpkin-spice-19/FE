import React from "react"
import Dashboard from "./components/Dashboard"

export const App = () => {
  return (
    <main>
      <Dashboard />
    </main>
  )
}
// import React from 'react'
// import ReactDOM from 'react-dom'
// import {CountProvider, useCountState, useCountDispatch} from './count-context'

// function CountDisplay() {
//   const {count} = useCountState()
//   return <div>{`The current count is ${count}`}</div>
// }

// function Counter() {
//   const dispatch = useCountDispatch()
//   return (
//     <button onClick={() => dispatch({type: 'increment'})}>
//       Increment count
//     </button>
//   )
// }

// function App() {
//   return (
//     <CountProvider>
//       <CountDisplay />
//       <Counter />
//     </CountProvider>
//   )
// }
