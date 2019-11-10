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
import PaperSheet from "./PaperSheet"
import { addTask, onUpdateHandle } from "../store/actions/taskAction"
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

export default function EditForm() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const { task } = useSelector(state => state.taskReducer)
  const [error, setError] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const updatedItem = event.target.updatedItem.value
    console.log("updatedItem", updatedItem)

    dispatch(onUpdateHandle(updatedItem))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="updatedItem"
        className="item"
        defaultValue={task}
      />
      <button className="update-add-item">Update</button>
    </form>
  )
}
