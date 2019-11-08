import React from "react"
import { deleteTask } from "../store/actions/taskAction"
import { useDispatch, useSelector } from "react-redux"
import RadioButtonUncheckedRoundedIcon from "@material-ui/icons/RadioButtonUncheckedRounded"
import styled from "styled-components"

export const Task = ({ task }) => {
  const dispatch = useDispatch()
  const { activeProject } = useSelector(state => state.projectReducer)

  const TaskStyle = styled.div`
    border-bottom: 1px solid #f2f0f0;
    display: flex;
    align-items: center;

    .radioBtn {
      color: #bcbcbc;
      cursor: pointer;
      margin-right: 10px;
    }
  `

  // {
  //   "task":"tes",
  //   "projectName":"Inbox",
  //   "date":"08/11/2019",
  //   "id":"e4833a24-ff84-4849-8c21-3ac78434e47d"
  // }

  return (
    <TaskStyle>
      <RadioButtonUncheckedRoundedIcon
        className="radioBtn"
        onClick={() => dispatch(deleteTask(task.id, activeProject))}
      />
      <p>{task.task}</p>
    </TaskStyle>
  )
}
