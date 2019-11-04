import axios from "axios"

// -------------- ENDPOINTS --------------
const URL = `https://letzdo-it-2019.herokuapp.com/api/task`

// -------------- GET PROJECTS --------------
export const GET_TASKQUERY_START = "GET_TASKQUERY_START"
export const GET_TASKQUERY_SUCCESS = "GET_TASKQUERY_SUCCESS"
export const GET_TASKQUERY_FAILURE = "GET_TASKQUERY_FAILURE"

// https://letzdo-it-2019.herokuapp.com/api/task?name=First TASKQUERY
export const getTaskQuery = query => async dispatch => {
  try {
    dispatch({ type: GET_TASKQUERY_START })
    const response = await axios(`${URL}?name=${query}`)

    dispatch({ type: GET_TASKQUERY_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: GET_TASKQUERY_FAILURE, payload: error })
  }
}
