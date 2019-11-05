import {
  TOGGLE_PROJECT_MODAL,
  TOGGLE_SIDECARD,
  TOGGLE_QUICKTASK_MODAL,
  GET_PROJECT_START,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_FAILURE,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
  ADD_PROJECT_START,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  DELETE_PROJECT_START,
  SET_ACTIVE_PROJECT
} from "../actions/projectAction"

const initialState = {
  projects: [],
  activeProject: "Inbox",
  isProjectLoading: false,
  isProjectModal: false,
  quickAddModal: false,
  isSideCard: false
}

export default function projectReducer(state = initialState, action) {
  switch (action.type) {
    // ----------------- TOGGLER PROJECT MODAL -----------------
    case TOGGLE_PROJECT_MODAL:
      return {
        ...state,
        isProjectModal: !state.isProjectModal
      }
    // ----------------- TOGGLER PROJECT MODAL -----------------
    case TOGGLE_SIDECARD:
      return {
        ...state,
        isSideCard: !state.isSideCard
      }
    // ----------------- TOGGLER PROJECT MODAL -----------------
    case SET_ACTIVE_PROJECT:
      return {
        ...state,
        activeProject: action.payload
      }
    // ----------------- TOGGLER QUICK ADD TASK MODAL -----------------
    case TOGGLE_QUICKTASK_MODAL:
      return {
        ...state,
        quickAddModal: !state.quickAddModal
      }
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
    // ----------------- ADD PROJECT -----------------
    case ADD_PROJECT_START:
      return {
        ...state,
        isProjectLoading: true
      }
    case ADD_PROJECT_SUCCESS:
      return {
        ...state,
        isProjectLoading: false,
        isProjectModal: !state.isProjectModal
      }
    case ADD_PROJECT_FAILURE:
      return {
        ...state,
        isProjectLoading: false,
        errors: action.payload
      }
    // ----------------- DELETE PROJECT -----------------
    case DELETE_PROJECT_START:
      return {
        ...state,
        isProjectLoading: true
      }
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        isProjectLoading: false
      }
    case DELETE_PROJECT_FAILURE:
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
