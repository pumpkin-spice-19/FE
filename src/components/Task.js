import React from "react"
import { deleteTask } from "../store/actions/taskAction"
import { useDispatch, useSelector } from "react-redux"
import DeleteIcon from "@material-ui/icons/Delete"

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  const { activeProject } = useSelector(state => state.projectReducer)

  return (
    <div>
      <p>{JSON.stringify(task)}</p>
      <DeleteIcon
        onClick={() => dispatch(deleteTask(task.id, activeProject))}
      />
    </div>
  )
}
