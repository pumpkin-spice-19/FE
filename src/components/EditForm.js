import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { onUpdateHandle, cancelEditHandler } from "../store/actions/taskAction"
import SnackBar from "./SnackBar"

export default function EditForm() {
  const dispatch = useDispatch()

  const { task } = useSelector(state => state.taskReducer)
  const [error, setError] = useState(false)

  const handleSubmit = event => {
    event.preventDefault()
    const updatedItem = event.target.updatedItem.value
    if (!updatedItem.length) {
      setError(!error)
      return
    }
    console.log("updatedItem", updatedItem)

    dispatch(onUpdateHandle(updatedItem))
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setError(false)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="updatedItem"
          className="item"
          defaultValue={task}
        />
        <button type="submit" className="update-add-item">
          Update
        </button>
        <button onClick={() => dispatch(cancelEditHandler())}>cancel</button>
      </form>

      <SnackBar error={error} handleClose={handleClose} />
    </>
  )
}
