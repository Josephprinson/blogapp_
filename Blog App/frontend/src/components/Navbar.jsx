import { AppBar, Box, Button, IconButton, Toolbar, Typography,MenuIcon, colors } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
          <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
            
         
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            blogapp
          </Typography>

          <Button>
            <Link to={'/add'}
            style={{color:'white',textDecoration:'none'}}>

                add
            </Link>
          </Button>

          <Button>
            <Link to={'/my'}
            style={{color:'white',textDecoration:'none'}}>

                my profile
            </Link>
          </Button>
          <Button>
            <Link to={'/view'}
            style={{color:'white',textDecoration:'none'}}>
                view
            </Link>
          </Button>
       
          <Button>
            <Link to={'/'}
            style={{color:'white',textDecoration:'none'}}>
                log out
            </Link>
          </Button>


           
         
        </Toolbar>
      </AppBar>
    </Box>

    </div>
  )
}

export default Navbar
