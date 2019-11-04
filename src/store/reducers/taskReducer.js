import {
  GET_TASKQUERY_START,
  GET_TASKQUERY_SUCCESS,
  GET_TASKQUERY_FAILURE
} from "../actions/taskAction"

const initialState = {
  taskQuery: [],
  isTaskLoading: false
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    // ----------------- GET_TOP_RATED -----------------
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
    // ---------------------- RETURN STATE ----------------------
    default:
      return state
  }
}
