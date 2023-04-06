import React from 'react'
import AppsIcon from '@mui/icons-material/Apps'
import Avatar from '@mui/material/Avatar'
import './navbar.css'

function navbar() {
  return (
    <div className='google__navbar'>
          <span className='navbar__item'> Gmail</span>
          <span>Images</span>
          <span className="appicon"><AppsIcon /></span>
          <span className="avatar"><Avatar>H</Avatar></span>
    </div>
    
  )
}

export default navbar