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
  toggleProjectModal
} from "../store/actions/projectAction"
import DeleteIcon from "@material-ui/icons/Delete"
import SearchAppBar from "./SearchAppBar"
import AddProjectForm from "./AddProjectForm"
import AddTask from "./AddTask"

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
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  noContent: {
    textAlign: "center",
    color: "#9E9E9E"
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
  const [active, setActive] = useState("Inbox")
  const { projects, isProjectModal } = useSelector(
    state => state.projectReducer
  )
  const addProject = (
    <>
      <h2>Add Project</h2>
      <Divider />
      <AddProjectForm handleClose={() => dispatch(toggleProjectModal())} />
    </>
  )

  useEffect(() => {
    console.log(projects)
    dispatch(getProjects())
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
              onClick={() => {
                setActive(item.name)
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        <Divider />
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
                onClick={() => {
                  setActive(item.name)
                }}
              >
                <ListItemIcon>
                  <FiberManualRecordIcon style={{ color: `${item.color}` }} />
                </ListItemIcon>
                <ListItemText primary={item.name} />
                <DeleteIcon onClick={() => dispatch(deleteProject(item.id))} />
              </ListItem>
            ))}
          <SimpleModal
            content={addProject}
            toggleHandler={() => dispatch(toggleProjectModal())}
            state={isProjectModal}
          >
            <ListItem button key="Add Project">
              <ListItemIcon>
                <AddIcon style={{ color: "red" }} />
              </ListItemIcon>
              <ListItemText primary="Add Project" />
            </ListItem>
          </SimpleModal>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2>{active}</h2>
        <p>new added tasks here</p>
        <p>
          <AddIcon style={{ color: "red" }} />
          Add Tasks
          <AddTask />
        </p>
      </main>
    </div>
  )
}
