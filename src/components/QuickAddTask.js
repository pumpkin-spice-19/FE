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
import { useDispatch } from "react-redux"
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
    const newProject = {
      color: project.color,
      fav: check.checked,
      name: project.name
    }
    dispatch(addProject(newProject))
    setProject({ name: "", color: "" })
    // reset form
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
          <InputLabel>Project name</InputLabel>
          <Select value={project.color} onChange={handleChange("color")}>
            {colorPallete.map((item, index) => (
              <MenuItem key={item.hex + index} value={item.hex}>
                <FiberManualRecordIcon style={{ color: `${item.hex}` }} />
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
        disabled={!project.name}
      >
        Add
      </Button>
    </form>
  )
}
