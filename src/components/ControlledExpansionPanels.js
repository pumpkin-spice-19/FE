import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   flexBasis: "33.33%",
  //   flexShrink: 0
  // }
}))

export default function ControlledExpansionPanels({ children }) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
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
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Projects</Typography>
        </ExpansionPanelSummary>
        <div>{children}</div>
      </ExpansionPanel>
    </div>
  )
}
