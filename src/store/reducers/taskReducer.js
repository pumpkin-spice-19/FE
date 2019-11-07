import { ADD_PROJECT, DELETE_PROJECT } from "../actions/taskAction"

const initialState = {
  taskQuery: [],
  isTaskLoading: false
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
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
