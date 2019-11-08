import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Button from "@material-ui/core/Button"
import EventNoteIcon from "@material-ui/icons/EventNote"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
    marginLeft: "auto"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
    // opacity: 0
  }
}))

export default function ControlledOpenSelect({
  projects,
  defaultProject,
  handleChange,
  stateTask
}) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <Button className={classes.button} onClick={handleOpen}>
        <EventNoteIcon />
      </Button>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Project name
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={stateTask.projectName}
          onChange={handleChange("projectName")}
        >
          {defaultProject.map((item, index) => (
            <MenuItem key={item.name + index} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
          {projects &&
            projects.map(item => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </>
  )
}
