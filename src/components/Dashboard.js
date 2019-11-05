import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import AddIcon from "@material-ui/icons/Add"
import TodayIcon from "@material-ui/icons/Today"
import EventNoteIcon from "@material-ui/icons/EventNote"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import SimpleModal from "./SimpleModal"
import { useSelector, useDispatch } from "react-redux"
import {
  getProjects,
  deleteProject,
  toggleProjectModal,
  setActiveProject
} from "../store/actions/projectAction"
import { getTaskQuery } from "../store/actions/taskAction"
import DeleteIcon from "@material-ui/icons/Delete"
import SearchAppBar from "./SearchAppBar"
import AddProjectForm from "./AddProjectForm"
import AddTask from "./AddTask"
import { TaskListsContainer } from "./TaskListsContainer"
import ControlledExpansionPanels from "./ControlledExpansionPanels"

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1)
  },
  toolbar: theme.mixins.toolbar,
  noContent: {
    textAlign: "center",
    color: "#9E9E9E"
  },
  listItem: {
    height: "40px"
  },
  marginRight: {
    marginRight: "10px"
  }
}))
const sidebar = [
  {
    name: "Inbox",
    icon: <InboxIcon />
  },
  {
    name: "Today",
    icon: <TodayIcon />
  },
  {
    name: "Next 7 days",
    icon: <EventNoteIcon />
  }
]
export default function DashBoard() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    projects,
    isProjectModal,
    isProjectLoading,
    activeProject
  } = useSelector(state => state.projectReducer)
  const { taskQuery, isTaskLoading } = useSelector(state => state.taskReducer)
  const addProject = (
    <>
      <h2>Add Project</h2>
      <Divider />
      <AddProjectForm handleClose={() => dispatch(toggleProjectModal())} />
    </>
  )

  useEffect(() => {
    dispatch(getProjects())
  }, [])
  useEffect(() => {
    dispatch(getTaskQuery(activeProject))
  }, [activeProject])

  return (
    <div className={classes.root}>
      <CssBaseline />
      <SearchAppBar />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {sidebar.map((item, index) => (
            <ListItem
              button
              key={item.name}
              onClick={() => dispatch(setActiveProject(item.name))}
              className={classes.listItem}
            >
              <p className={classes.marginRight}>{item.icon}</p>
              <p>{item.name}</p>
            </ListItem>
          ))}
        </List>
        <Divider />
        <ControlledExpansionPanels>
          <List>
            {!projects.length && (
              <ListItem className={classes.noContent}>
                You have no projects
              </ListItem>
            )}
            {isProjectLoading ? (
              <ListItem button className={classes.listItem}>
                <p>loading ...</p>
              </ListItem>
            ) : (
              projects &&
              projects.map((item, index) => (
                <ListItem
                  button
                  key={item.id}
                  onClick={() => dispatch(setActiveProject(item.name))}
                  className={classes.listItem}
                >
                  <p>
                    <FiberManualRecordIcon
                      className={classes.marginRight}
                      style={{ color: `${item.color}`, fontSize: "1rem" }}
                    />
                  </p>
                  <p>{item.name}</p>
                  <p>
                    <DeleteIcon
                      onClick={() => dispatch(deleteProject(item.id))}
                    />
                  </p>
                </ListItem>
              ))
            )}
            <SimpleModal
              content={addProject}
              toggleHandler={() => dispatch(toggleProjectModal())}
              state={isProjectModal}
            >
              <ListItem button key="Add Project">
                <p className={classes.marginRight}>
                  <AddIcon
                    style={{ color: "red" }}
                    className={classes.marginRight}
                  />
                </p>
                <p>Add Project</p>
              </ListItem>
            </SimpleModal>
          </List>
        </ControlledExpansionPanels>
      </Drawer>

      {/* TASK CONTENT */}
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2>{activeProject}</h2>

        {!taskQuery.length && (
          <ListItem className={classes.noContent}>You have no task</ListItem>
        )}
        {isTaskLoading ? (
          <p>Loading ...</p>
        ) : (
          <TaskListsContainer tasks={taskQuery} />
        )}
        <div>
          <AddIcon style={{ color: "red" }} />
          <p>Add Tasks</p>
        </div>
        <AddTask />
      </main>
    </div>
  )
}
