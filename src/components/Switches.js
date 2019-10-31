import React from "react"
import Switch from "@material-ui/core/Switch"

export default function Switches({ state, handleChecked }) {
  return (
    <div>
      <Switch
        checked={state.checked}
        onChange={handleChecked("checked")}
        value="checked"
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  )
}
