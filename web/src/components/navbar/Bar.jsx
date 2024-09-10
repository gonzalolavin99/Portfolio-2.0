import * as React from 'react';
import './Bar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CasinoIcon from '@mui/icons-material/Casino';

const pages = [
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
  { name: 'About Me', id: 'about-me' }
];

const Bar = () => {
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar position="static" sx={{bgcolor:'rgb(189, 189, 189)'}} className='appbar'>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <CasinoIcon sx={{ mr: 1, color: 'black' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            Gonzalo Lavín
          </Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              onClick={() => handleScrollTo(page.id)}
              sx={{ 
                color: 'black', 
                '&:hover': {
                  backgroundColor: "#5C5C5C"
                } 
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Bar;