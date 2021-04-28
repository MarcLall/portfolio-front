import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import React from 'react'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
        <Link to='/home'>Profile</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <Link to='/blog'>Mon Histoire</Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to=''></Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
