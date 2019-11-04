import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}))

export default function PaperSheet({ children }) {
  const classes = useStyles()

  return <Paper className={classes.root}>{children}</Paper>
}
