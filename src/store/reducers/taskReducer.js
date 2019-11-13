import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_QUICKTASK_MODAL,
  SEARCH_TASK,
  ON_EDIT_HANDLE,
  ON_UPDATE_HANDLE,
  TOGGLE_COMPLETED,
  CANCEL_EDIT_HANDLER
} from "../actions/taskAction";
import uuidv4 from "uuid/v4";
import moment from "moment";

const initialState = {
  quickAddModal: false,
  edit: false,
  queryResult: [],
  taskId: "",
  taskQuery: [
    {
      date: moment().format("DD/MM/YYYY"),
      id: uuidv4(),
      projectName: "Inbox",
      task: "🦊 First Task Example...",
      completed: false
    }
  ]
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    // ----------------- ADD TASK -----------------
    case ADD_TASK:
      return {
        ...state,
        taskQuery: [...state.taskQuery, action.newTask]
      };
    // ----------------- DELETE PROJECT -----------------
    case DELETE_TASK:
      return {
        ...state,
        taskQuery: state.taskQuery.filter(task => task.id !== action.id),
        queryResult:
          state.queryResult &&
          state.queryResult.length &&
          state.queryResult.filter(task => task.id !== action.id)
      };

    // ----------------- TOGGLER QUICK ADD TASK MODAL -----------------
    case TOGGLE_QUICKTASK_MODAL:
      return {
        ...state,
        quickAddModal: !state.quickAddModal
      };
    // ----------------- TOGGLER QUICK ADD TASK MODAL -----------------
    case SEARCH_TASK:
      return {
        ...state,
        queryResult: action.payload
      };
    // ----------------- ON_EDIT_HANDLE ---------------
    case ON_EDIT_HANDLE:
      return {
        ...state,
        edit: true,
        taskId: action.taskId,
        task: action.task //title/name
      };
    // ----------------- ON_EDIT_HANDLE ---------------
    case CANCEL_EDIT_HANDLER:
      return {
        ...state,
        edit: false
      };
    // ----------------- ON_UPDATE_HANDLE ---------------
    case ON_UPDATE_HANDLE:
      // let currState = state.queryResult.length ? "queryResult" : "taskQuery";

      return {
        ...state,
        edit: false,
        taskQuery: state.taskQuery.map(item => {
          if (item.id === state.taskId) {
            // update task
            item["task"] = action.payload;
            return item;
          }
          return item;
        }),
        queryResult:
          state.queryResult &&
          state.queryResult.length &&
          state.queryResult.map(item => {
            if (item.id === state.taskId) {
              // update task
              item["task"] = action.payload;
              return item;
            }
            return item;
          })
      };
    // ----------------- TOGGLE_COMPLETED ---------------
    case TOGGLE_COMPLETED:
      return {
        ...state,
        taskQuery: state.taskQuery.map(item =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        ),
        queryResult:
          state.queryResult &&
          state.queryResult.length &&
          state.queryResult.map(item =>
            item.id === action.id
              ? { ...item, completed: !item.completed }
              : item
          )
      };
    // ---------------------- RETURN STATE ----------------------
    default:
      return state;
  }
}
