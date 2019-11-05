import axios from "axios"

// -------------- ENDPOINTS --------------
const URL = `https://letzdo-it-2019.herokuapp.com/api/task`

// -------------- GET QUERY TASKS --------------
export const GET_TASKQUERY_START = "GET_TASKQUERY_START"
export const GET_TASKQUERY_SUCCESS = "GET_TASKQUERY_SUCCESS"
export const GET_TASKQUERY_FAILURE = "GET_TASKQUERY_FAILURE"

// https://letzdo-it-2019.herokuapp.com/api/task?name=First TASKQUERY
export const getTaskQuery = query => async dispatch => {
  try {
    dispatch({ type: GET_TASKQUERY_START })
    const response = await axios(`${URL}/search?name=${query}`)

    dispatch({ type: GET_TASKQUERY_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: GET_TASKQUERY_FAILURE, payload: error })
  }
}

// -------------- ADD TASKS --------------
export const ADD_TASK_START = "ADD_TASK_START"
export const ADD_TASK_SUCCESS = "ADD_TASK_SUCCESS"
export const ADD_TASK_FAILURE = "ADD_TASK_FAILURE"

export const addTaskAction = (data, query) => async dispatch => {
  try {
    dispatch({ type: ADD_TASK_START })
    await axios.post(URL, data)

    dispatch({ type: ADD_TASK_SUCCESS })
    getTaskQuery(query)(dispatch)
  } catch (error) {
    dispatch({ type: ADD_TASK_FAILURE, payload: error })
  }
}
// -------------- DELETE TASKS --------------
export const DELETE_TASK_START = "DELETE_TASK_START"
export const DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS"
export const DELETE_TASK_FAILURE = "DELETE_TASK_FAILURE"

export const deleteTask = (id, query) => async dispatch => {
  try {
    dispatch({ type: DELETE_TASK_START })
    await axios.delete(`${URL}/${id}`)

    dispatch({ type: DELETE_TASK_SUCCESS })
    getTaskQuery(query)(dispatch)
  } catch (error) {
    dispatch({ type: DELETE_TASK_FAILURE, payload: error })
  }
}
