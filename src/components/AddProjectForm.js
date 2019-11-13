import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { useDispatch } from "react-redux"
import { addProject } from "../store/actions/projectAction"
import { colorPallete } from "../helper/index"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import uuidv4 from "uuid/v4"
import SnackBar from "./SnackBar"
import PaperSheet from "./PaperSheet"

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

export default function AddProjectForm({ handleClose }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [project, setProject] = useState({
    name: "",
    color: ""
  })
  const [error, setError] = useState(false)
  const handleChange = name => e => {
    setProject({ ...project, [name]: e.target.value })
  }

  const handleCloseError = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setError(false)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!project.name.length) {
      setError(!error)
      return
    }
    const newProject = {
      color: project.color,
      name: project.name,
      id: uuidv4()
    }
    dispatch(addProject(newProject))
    setProject({ name: "", color: "" })
    // reset form
  }

  return (
    <>
      <PaperSheet>
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
            style={{
              background: `#da4d43`,
              color: "#fdfdfe"
            }}
          >
            Add
          </Button>
        </form>
      </PaperSheet>
      <SnackBar
        error={error}
        handleClose={handleCloseError}
        message="Project Name is required !"
      />
    </>
  )
}
