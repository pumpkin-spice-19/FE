import { ADD_TASK, DELETE_TASK } from "../actions/taskAction"
import uuidv4 from "uuid/v4"
import moment from "moment"

const initialState = {
  taskQuery: [
    {
      date: moment().format("DD/MM/YYYY"),
      id: uuidv4(),
      projectName: "Inbox",
      task: "test"
    }
  ]
}

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    // ----------------- ADD TASK -----------------
    case ADD_TASK:
      return {
        ...state,
        taskQuery: [...state.taskQuery, action.newTask]
      }
    // ----------------- DELETE PROJECT -----------------
    case DELETE_TASK:
      return {
        ...state,
        taskQuery: state.taskQuery.filter(task => task.id !== action.id)
      }

    // ---------------------- RETURN STATE ----------------------
    default:
      return state
  }
}
