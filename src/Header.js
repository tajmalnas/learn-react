import React from 'react'
import "./Header.css"
import PersonIcon from '@mui/icons-material/Person'
import { IconButton } from '@material-ui/core';
import logo from './assets/pngwing.com.png';
import { Forum } from '@mui/icons-material';

const Header = () => {
  return (
    <div className='Header'>
      <IconButton>
        <PersonIcon />
      </IconButton>
      <img className='tinder-logo' src={logo}></img>
      <IconButton>
        <Forum />
      </IconButton>
    </div>
  )
}

export default Header
