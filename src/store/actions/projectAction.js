import axios from "axios"

// -------------- TOGGLE PROJECT MODAL --------------
export const TOGGLE_PROJECT_MODAL = "TOGGLE_PROJECT_MODAL"
export const toggleProjectModal = () => {
  return {
    type: TOGGLE_PROJECT_MODAL
  }
}
// -------------- TOGGLE QUICK ADD TASK MODAL --------------
export const TOGGLE_QUICKTASK_MODAL = "TOGGLE_QUICKTASK_MODAL"
export const toggleQuickAddModal = () => {
  return {
    type: TOGGLE_QUICKTASK_MODAL
  }
}
// -------------- TOGGLE PROJECT SIDE CARD --------------
export const TOGGLE_SIDECARD = "TOGGLE_SIDECARD"
export const toggleSideCard = () => {
  return {
    type: TOGGLE_SIDECARD
  }
}

// -------------- ACTIVE PROJECT --------------
export const SET_ACTIVE_PROJECT = "SET_ACTIVE_PROJECT"
export const setActiveProject = project => {
  return {
    type: SET_ACTIVE_PROJECT,
    payload: project
  }
}

export const ADD_PROJECT = "ADD_PROJECT"
export const addProject = newProject => {
  return {
    type: ADD_PROJECT,
    newProject
  }
}

export const DELETE_PROJECT = "DELETE_PROJECT"
export const deleteProject = id => {
  return {
    type: DELETE_PROJECT,
    id
  }
}
