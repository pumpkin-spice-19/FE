import {
  GET_TASKQUERY_START,
  GET_TASKQUERY_SUCCESS,
  GET_TASKQUERY_FAILURE,
  ADD_TASK_START,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  DELETE_TASK_START,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE
} from "../actions/taskAction"

const initialState = {
  taskQuery: [],
  isTaskLoading: false
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    // ----------------- GET TASK -----------------
    case GET_TASKQUERY_START:
      return {
        ...state,
        isTaskLoading: true
      }
    case GET_TASKQUERY_SUCCESS:
      return {
        ...state,
        taskQuery: action.payload,
        isTaskLoading: false
      }
    case GET_TASKQUERY_FAILURE:
      return {
        ...state,
        isTaskLoading: false,
        errors: action.payload
      }
    // ----------------- ADD TASK -----------------
    case ADD_TASK_START:
      return {
        ...state,
        isTaskLoading: true
      }
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        isTaskLoading: false
      }
    case ADD_TASK_FAILURE:
      return {
        ...state,
        isTaskLoading: false,
        errors: action.payload
      }
    // ----------------- ADD TASK -----------------
    case DELETE_TASK_START:
      return {
        ...state,
        isTaskLoading: true
      }
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        isTaskLoading: false
      }
    case DELETE_TASK_FAILURE:
      return {
        ...state,
        isTaskLoading: false,
        errors: action.payload
      }
    // ---------------------- RETURN STATE ----------------------
    default:
      return state
  }
}
