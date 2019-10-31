import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import Switches from "./Switches"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  }
}))

export default function AddProjectForm() {
  const classes = useStyles()
  const [project, setProject] = useState({
    name: "",
    color: ""
  })

  const handleChange = name => e => {
    setProject({ ...project, [name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(project)

    // reset form
    setProject({ name: "", color: "" })
  }
  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div>
        <TextField
          id="project-name"
          label="Project name"
          className={classes.textField}
          value={project.name}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="project-color"
          label="Project color"
          className={classes.textField}
          value={project.color}
          onChange={handleChange("color")}
          margin="normal"
          variant="outlined"
        />
        <div>
          <Switches />
          <p>Add to favorites</p>
        </div>
      </div>

      <Divider />
      <Button variant="contained" className={classes.button}>
        Cancel
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        type="submit"
      >
        Add
      </Button>
    </form>
  )
}
