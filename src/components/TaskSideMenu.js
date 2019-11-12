import React from "react"
import Button from "@material-ui/core/Button"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { makeStyles } from "@material-ui/core/styles"
import EditSharpIcon from "@material-ui/icons/EditSharp"
import DeleteIcon from "@material-ui/icons/Delete"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  left: {
    marginTop: "40px"
  }
}))
export default function TaskSideMenu({ children, onEdit, onDelete }) {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = e => {
    e.preventDefault()
    if (e.nativeEvent.which === 1) {
      setAnchorEl(e.currentTarget)
    } else if (e.nativeEvent.which === 3) {
      setAnchorEl(e.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.root}>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        onContextMenu={handleClick}
      >
        {children}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.left}
      >
        <MenuItem onClick={onDelete}>
          <DeleteIcon />
          Delete Project
        </MenuItem>
        <MenuItem onClick={onEdit}>
          <EditSharpIcon />
          Edit Project
        </MenuItem>
        {/* <MenuItem onClick={() => dispatch(deleteProject(item.id))}>
          <FavoriteBorderSharpIcon />
          Add to favorites
        </MenuItem> */}
      </Menu>
    </div>
  )
}
