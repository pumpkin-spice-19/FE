import React from "react"
import {
  deleteTask,
  onEditHandle,
  toggleCompleted
} from "../store/actions/taskAction"
import { useDispatch, useSelector } from "react-redux"
import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded"
import styled from "styled-components"
import EditForm from "./EditForm"
import TaskSideMenu from "./TaskSideMenu"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  const { activeProject } = useSelector(state => state.projectReducer)
  const { edit, taskId } = useSelector(state => state.taskReducer)

  const TaskStyle = styled.div`
    border-bottom: 1px solid #f2f0f0;
    display: flex;
    align-items: center;
    .radioBtn {
      color: #bcbcbc;
      cursor: pointer;
      margin-right: 10px;
    }
    .taskName {
      margin-right: auto;
    }
    .lineThrough {
      text-decoration: line-through;
      color: gray;
    }
  `
  // {
  //   "task":"tes",
  //   "projectName":"Inbox",
  //   "date":"08/11/2019",
  //   "id":"e4833a24-ff84-4849-8c21-3ac78434e47d"
  // }

  if (edit === true && task.id === taskId) {
    return <EditForm />
  }
  return (
    <TaskStyle>
      <RadioButtonUncheckedRoundedIcon
        className="radioBtn"
        onClick={() => dispatch(toggleCompleted(task.id))}
        // ADD COMPLETED
      />
      <p className={`taskName ${task.completed && "lineThrough"}`}>
        {task.task}
      </p>
      <TaskSideMenu
        onEdit={() => dispatch(onEditHandle(task.id, task.task))}
        onDelete={() => dispatch(deleteTask(task.id, activeProject))}
      >
        <MoreHorizIcon className="horizonIcon" />
      </TaskSideMenu>
    </TaskStyle>
  )
}
