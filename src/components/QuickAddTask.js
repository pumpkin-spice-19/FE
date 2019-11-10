import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useDispatch, useSelector } from "react-redux"
import { colorPallete } from "../helper/index"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import PaperSheet from "./PaperSheet"
import { addTask, toggleQuickAddModal } from "../store/actions/taskAction"
import moment from "moment"
import uuidv4 from "uuid/v4"
import SnackBar from "./SnackBar"

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
  },
  button: {
    marginRight: 10,
    marginTop: 20
  }
}))

export default function QuickAddTask({ handleClose }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { projects, activeProject } = useSelector(state => state.projectReducer)
  const [stateTask, setStateTask] = useState({
    task: "",
    projectName: ""
  })
  const [error, setError] = useState(false)

  const handleChange = name => e => {
    setStateTask({ ...stateTask, [name]: e.target.value })
  }

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setError(false)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newTask = {
      task: stateTask.task,
      projectName: stateTask.projectName || activeProject,
      date: moment().format("DD/MM/YYYY"),
      id: uuidv4()
    }
    // 05/11/2019
    dispatch(addTask(newTask))
    // close modal
    dispatch(toggleQuickAddModal())
    // reset form
    setStateTask({ task: "", projectName: "" })
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
    <>
      <PaperSheet>
        <form
          className={classes.container}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="task-name"
            label="task name"
            className={classes.textField}
            value={stateTask.task}
            onChange={handleChange("task")}
            margin="normal"
            variant="outlined"
          />

          <FormControl className={classes.formControl}>
            <InputLabel>Project name</InputLabel>
            <Select
              className={classes.formControl}
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
            style={{
              background: `#da4d43`,
              color: "#fdfdfe"
            }}
          >
            Add
          </Button>
        </form>
      </PaperSheet>

      <SnackBar error={error} handleClose={handleCloseError} />
    </>
  )
}
