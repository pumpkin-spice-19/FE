// -------------- TOGGLE QUICK ADD TASK MODAL --------------
export const TOGGLE_QUICKTASK_MODAL = "TOGGLE_QUICKTASK_MODAL"
export const toggleQuickAddModal = () => {
  return {
    type: TOGGLE_QUICKTASK_MODAL
  }
}
// -------------- SEARCH_TASK --------------
export const SEARCH_TASK = "SEARCH_TASK"
export const searchTask = data => {
  return {
    type: SEARCH_TASK,
    payload: data
  }
}

// -------------- ADD TASK --------------
export const ADD_TASK = "ADD_TASK"
export const addTask = newTask => {
  return {
    type: ADD_TASK,
    newTask
  }
}

// -------------- DELETE TASK --------------
export const DELETE_TASK = "DELETE_TASK"
export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    id
  }
}
// -------------- DELETE TASK --------------
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED"
export const toggleCompleted = id => {
  return {
    type: TOGGLE_COMPLETED,
    id
  }
}

// -------------- ON_EDIT_HANDLE TASK --------------
export const ON_EDIT_HANDLE = "ON_EDIT_HANDLE"
export const onEditHandle = (taskId, task) => {
  return {
    type: ON_EDIT_HANDLE,
    taskId,
    task
  }
}
// -------------- CANCEL_EDIT_HANDLER TASK --------------
export const CANCEL_EDIT_HANDLER = "CANCEL_EDIT_HANDLER"
export const cancelEditHandler = () => {
  return {
    type: CANCEL_EDIT_HANDLER
  }
}
// -------------- ON_UPDATE_HANDLE TASK --------------
export const ON_UPDATE_HANDLE = "ON_UPDATE_HANDLE"
export const onUpdateHandle = data => {
  return {
    type: ON_UPDATE_HANDLE,
    payload: data
  }
}
