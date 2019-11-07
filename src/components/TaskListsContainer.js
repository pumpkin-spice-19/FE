import React from "react"
import { Task } from "./Task"
import { useSelector } from "react-redux"

export const TaskListsContainer = ({ tasks }) => {
  const { activeProject } = useSelector(state => state.projectReducer)

  const count =
    tasks &&
    tasks.filter(task => task.projectName === activeProject).map(task => task)
      .length

  if (!count) {
    return <p> You have no task</p>
  }
  return (
    tasks &&
    tasks
      .filter(task => task.projectName === activeProject)
      .map(task => {
        return <Task key={task.id} task={task} />
      })
  )
}
