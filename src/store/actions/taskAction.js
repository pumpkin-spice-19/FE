import axios from "axios"

// -------------- ENDPOINTS --------------
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
