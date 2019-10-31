import React from "react"
import Switch from "@material-ui/core/Switch"

export default function Switches() {
  const [state, setState] = React.useState({
    checkedB: false
  })

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked })
  }

  return (
    <div>
      <Switch
        checked={state.checkedB}
        onChange={handleChange("checkedB")}
        value="checkedB"
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  )
}
