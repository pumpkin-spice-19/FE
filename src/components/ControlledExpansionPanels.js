import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}))

export default function ControlledExpansionPanels({ children }) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    console.log(isExpanded ? panel : false)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
        >
          <Typography className={classes.heading}>Projects</Typography>
        </ExpansionPanelSummary>
        <div>{children}</div>
      </ExpansionPanel>
    </div>
  )
}
