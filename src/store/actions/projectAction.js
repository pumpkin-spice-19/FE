import axios from "axios"

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
    const response = await axios.post(URL, { data })
    dispatch({ type: ADD_PROJECT_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: ADD_PROJECT_FAILURE, payload: error })
  }
}
