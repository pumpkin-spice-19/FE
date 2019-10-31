import {
  GET_PROJECT_START,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE
} from "../actions/projectAction"

const initialState = {
  projects: [],
  isProjectLoading: false
}

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    // ----------------- GET_TOP_RATED -----------------
    case GET_PROJECT_START:
      return {
        ...state,
        isProjectLoading: true
      }
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        projects: action.payload,
        isProjectLoading: false
      }
    case GET_PROJECT_FAILURE:
      return {
        ...state,
        isProjectLoading: false,
        errors: action.payload
      }

    // ---------------------- RETURN STATE ----------------------
    default:
      return state
  }
}
