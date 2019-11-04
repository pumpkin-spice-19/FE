import React from "react"
import { Task } from "./Task"

export const TaskListsContainer = ({ tasks }) => {
  return (
    tasks &&
    tasks.map(task => {
      return <Task key={task.id} task={task} />
    })
  )
}
