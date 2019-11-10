import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { useDispatch, useSelector } from "react-redux"
import { addTask } from "../store/actions/taskAction"
import moment from "moment"
import uuidv4 from "uuid/v4"
import ControlledOpenSelect from "./ControlledOpenSelect"
import SnackBar from "./SnackBar"

const useStyles = makeStyles(theme => ({
  textField: {
    width: "100%"
  },
  formControl: {
    minWidth: "100%"
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center"
  }
}))

export default function AddTask({ toggleAddTask }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { projects, activeProject, darkMode } = useSelector(
    state => state.projectReducer
  )
  const [stateTask, setStateTask] = useState({
    task: "",
    projectName: ""
  })
  const [error, setError] = useState(false)
  const handleChange = name => e => {
    setStateTask({ ...stateTask, [name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!stateTask.task.length) {
      setError(!error)
      return
    }
    const newTask = {
      task: stateTask.task,
      projectName: stateTask.projectName || activeProject,
      date: moment().format("DD/MM/YYYY"),
      id: uuidv4()
    }
    // 05/11/2019
    dispatch(addTask(newTask))
    // reset form
    setStateTask({ task: "", projectName: "" })
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setError(false)
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
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        className={classes.formContainer}
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
        <Button
          variant="contained"
          style={{
            background: `${darkMode}`,
            color: "#fdfdfe",
            marginRight: 10
          }}
          className={classes.button}
          type="submit"
        >
          Add Task
        </Button>
        <Button onClick={toggleAddTask} className={classes.button}>
          Close
        </Button>
        <ControlledOpenSelect
          projects={projects}
          defaultProject={defaultProject}
          stateTask={stateTask}
          handleChange={handleChange}
        />
      </form>
      <SnackBar error={error} handleClose={handleClose} />
    </>
  )
}
