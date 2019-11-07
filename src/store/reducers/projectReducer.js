import {
  TOGGLE_PROJECT_MODAL,
  TOGGLE_SIDECARD,
  SET_ACTIVE_PROJECT,
  ADD_PROJECT,
  DELETE_PROJECT
} from "../actions/projectAction"
import uuidv4 from "uuid/v4"

const initialState = {
  projects: [
    { id: uuidv4(), name: "Finish", color: "#A2A2D0", fav: false },
    { id: uuidv4(), name: "Project", color: "#6699CC", fav: false },
    { id: uuidv4(), name: "By this weeked", color: "#7366BD", fav: false }
  ],
  activeProject: "Inbox",
  isProjectLoading: false,
  isProjectModal: false,
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
    // ----------------- ADD PROJECT -----------------
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.newProject],
        isProjectModal: !state.isProjectModal
      }
    // ----------------- DELETE PROJECT -----------------
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(project => project.id !== action.id)
      }

    // ---------------------- RETURN STATE ----------------------
    default:
      return state
  }
}
