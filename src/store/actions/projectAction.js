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

const URL = `https://letzdo-it-2019.herokuapp.com/api/project`
// -------------- GET PROJECTS --------------
export const GET_PROJECT_START = "GET_PROJECT_START"
export const GET_PROJECT_SUCCESS = "GET_PROJECT_SUCCESS"
export const GET_PROJECT_FAILURE = "GET_PROJECT_FAILURE"

export const getProjects = () => async dispatch => {
  try {
    dispatch({ type: GET_PROJECT_START })
    const response = await axios(URL)
    dispatch({ type: GET_PROJECT_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: GET_PROJECT_FAILURE, payload: error })
  }
}

// -------------- ADD PROJECT --------------
export const ADD_PROJECT_START = "ADD_PROJECT_START"
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS"
export const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE"

export const addProject = data => async dispatch => {
  try {
    dispatch({ type: ADD_PROJECT_START })
    await axios.post(URL, data)
    dispatch({ type: ADD_PROJECT_SUCCESS })
    getProjects()(dispatch)
  } catch (error) {
    dispatch({ type: ADD_PROJECT_FAILURE, payload: error })
  }
}

// -------------- DELETE PROJECT --------------
export const DELETE_PROJECT_START = "DELETE_PROJECT_START"
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS"
export const DELETE_PROJECT_FAILURE = "DELETE_PROJECT_FAILURE"

export const deleteProject = id => async dispatch => {
  try {
    dispatch({ type: DELETE_PROJECT_START })
    await axios.delete(`${URL}/` + id)
    dispatch({ type: DELETE_PROJECT_SUCCESS })
    getProjects()(dispatch)
  } catch (error) {
    dispatch({ type: DELETE_PROJECT_FAILURE, payload: error })
  }
}
