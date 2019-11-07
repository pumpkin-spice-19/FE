import axios from "axios"

export const ADD_TASK = "ADD_TASK"
export const addTask = newTask => {
  return {
    type: ADD_TASK,
    newTask
  }
}

export const DELETE_TASK = "DELETE_TASK"
export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    id
  }
}
