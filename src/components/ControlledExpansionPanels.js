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
  const [expanded, setExpanded] = useState(true)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? true : false)
  }

  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={expanded} onChange={handleChange("panel1")}>
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
