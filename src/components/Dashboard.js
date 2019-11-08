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
  toggleProjectModal,
  setActiveProject
} from "../store/actions/projectAction"
import { TaskListsContainer } from "./TaskListsContainer"
import { getTaskQuery } from "../store/actions/taskAction"
import SearchAppBar from "./SearchAppBar"
import AddProjectForm from "./AddProjectForm"
import AddTask from "./AddTask"
import ControlledExpansionPanels from "./ControlledExpansionPanels"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"

import SideMenu from "./SideMenu"

const drawerWidth = 300
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
  },
  mlAuto: {
    marginLeft: "auto",
    color: "gray",
    "&:hover": {
      color: "black"
    }
  },
  cross: {
    color: "red",
    "&:hover": {
      color: "white",
      background: "red",
      borderRadius: "50%"
    }
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
  const { projects, isProjectModal, activeProject } = useSelector(
    state => state.projectReducer
  )
  const { taskQuery } = useSelector(state => state.taskReducer)
  const addProject = (
    <>
      <h2>Add Project</h2>
      <Divider />
      <AddProjectForm handleClose={() => dispatch(toggleProjectModal())} />
    </>
  )

  useEffect(() => {
    dispatch(setActiveProject("Inbox"))
  }, [])

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
            {projects &&
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

                  <span className={classes.mlAuto}>
                    <SideMenu item={item}>
                      <MoreHorizIcon />
                    </SideMenu>
                  </span>
                </ListItem>
              ))}
            <SimpleModal
              content={addProject}
              toggleHandler={() => dispatch(toggleProjectModal())}
              open={isProjectModal}
            >
              <ListItem button key="Add Project">
                <p className={classes.marginRight}>
                  <AddIcon className={classes.cross} />
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

        <TaskListsContainer tasks={taskQuery} />

        <div>
          <AddIcon className={classes.cross} />
          <p>Add Tasks</p>
        </div>
        <AddTask />
      </main>
    </div>
  )
}
