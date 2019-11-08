import React from "react"
import { Task } from "./Task"
import { useSelector } from "react-redux"
import moment from "moment"

export const TaskListsContainer = ({ tasks }) => {
  const { activeProject } = useSelector(state => state.projectReducer)
  const { queryResult } = useSelector(state => state.taskReducer)

  const count =
    tasks &&
    tasks.filter(task => task.projectName === activeProject).map(task => task)
      .length

  if (!count) {
    return <p> You have no task</p>
  }

  // Search and Inbox
  if (activeProject === "Inbox") {
    if (queryResult && queryResult.length) {
      return (
        queryResult &&
        queryResult.map(task => {
          return <Task key={task.id} task={task} />
        })
      )
    }
    return (
      tasks &&
      tasks.map(task => {
        return <Task key={task.id} task={task} />
      })
    )
  }

  // TODAY
  if (activeProject === "Today") {
    return (
      tasks &&
      tasks
        .filter(task => task.date === moment().format("DD/MM/YYYY"))
        .map(task => {
          return <Task key={task.id} task={task} />
        })
    )
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
