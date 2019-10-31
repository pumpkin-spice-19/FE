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

export default function AddProjectForm({ handleClose }) {
  const classes = useStyles()
  const [project, setProject] = useState({
    name: "",
    color: ""
  })
  const [check, setCheck] = useState({
    checked: false
  })

  const handleChange = name => e => {
    setProject({ ...project, [name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(project, check)
    // reset form
    setProject({ name: "", color: "" })
  }
  const handleChecked = name => event => {
    setCheck({ ...check, [name]: event.target.checked })
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

        <FormControl className={classes.formControl}>
          <InputLabel>Project color</InputLabel>
          <Select value={project.color} onChange={handleChange("color")}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <div>
          <Switches handleChecked={handleChecked} state={check} />
          <p>Add to favorites</p>
        </div>
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
        disabled={!project.name}
      >
        Add
      </Button>
    </form>
  )
}
