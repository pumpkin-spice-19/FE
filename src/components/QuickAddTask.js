import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Switches from "./Switches"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useDispatch, useSelector } from "react-redux"
import { addProject } from "../store/actions/projectAction"
import { colorPallete } from "../helper/index"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "100%"
  }
}))

export default function QuickAddTask({ handleClose }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { projects } = useSelector(state => state.projectReducer)
  const [project, setProject] = useState({
    task: "",
    projectName: ""
  })
  const handleChange = name => e => {
    setProject({ ...project, [name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    const newProject = {
      task: project.task,
      projectName: project.projectName
    }
    console.log(newProject)
    // dispatch(addProject(newProject))
    // reset form
    setProject({ task: "", projectName: "" })
  }
  const defaultProject = [
    {
      name: "Inbox"
    },
    {
      name: "Today"
    },
    {
      name: "Next 7 days"
    }
  ]
  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="task-name"
          label="task name"
          className={classes.textField}
          value={project.task}
          onChange={handleChange("task")}
          margin="normal"
          variant="outlined"
        />

        <FormControl className={classes.formControl}>
          <InputLabel>Project name</InputLabel>
          <Select
            value={project.projectName}
            onChange={handleChange("projectName")}
          >
            {defaultProject.map((item, index) => (
              <MenuItem key={item.name + index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
            {projects &&
              projects.map((item, index) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>

      <Divider />
      <Button
        variant="contained"
        className={classes.button}
        onClick={handleClose}
      >
        Cancel
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        type="submit"
        disabled={!project.task}
      >
        Add
      </Button>
    </form>
  )
}
