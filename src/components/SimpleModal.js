import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"

function rand() {
  return Math.round(Math.random() * 20) - 10
}

function getModalStyle() {
  const top = 50 + rand()
  const left = 50 + rand()

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}))

export default function SimpleModal({
  children,
  content,
  toggleHandler,
  open
}) {
  const classes = useStyles()
  const [modalStyle] = React.useState(getModalStyle)

  return (
    <div>
      <div role="button" onClick={toggleHandler}>
        {children}
      </div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={toggleHandler}
      >
        <div style={modalStyle} className={classes.paper}>
          {content}
        </div>
      </Modal>
    </div>
  )
}
