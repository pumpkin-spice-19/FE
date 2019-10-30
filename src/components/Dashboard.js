import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import InboxIcon from "@material-ui/icons/MoveToInbox"
import AddIcon from "@material-ui/icons/Add"
import TodayIcon from "@material-ui/icons/Today"
import EventNoteIcon from "@material-ui/icons/EventNote"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord"
import SpringModal from "./SpringModal"

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
  toolbar: theme.mixins.toolbar
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

const secondList = [
  {
    name: "🙌 Welcome",
    icon: <FiberManualRecordIcon />
  }
]

export default function DashBoard() {
  const classes = useStyles()
  const [active, setActive] = useState("Inbox")

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
          {secondList.map((item, index) => (
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
          <ListItem button key="Add Project" onClick={() => {}}>
            <ListItemIcon>
              <AddIcon />
            </ListItemIcon>
            <ListItemText primary="Add Project" />
          </ListItem>
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <h2>{active}</h2>
        <p>Add Tasks</p>
      </main>

      <SpringModal />
    </div>
  )
}
