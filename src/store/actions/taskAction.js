import axios from "axios"

// -------------- TOGGLE QUICK ADD TASK MODAL --------------
export const TOGGLE_QUICKTASK_MODAL = "TOGGLE_QUICKTASK_MODAL"
export const toggleQuickAddModal = () => {
  return {
    type: TOGGLE_QUICKTASK_MODAL
  }
}

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
