import * as React from 'react';
import Box from '@mui/material/Box';

// mui core
import CssBaseline from '@mui/material/CssBaseline';

// components
import AppBar from './components/AppBar';
import DrawerBar from './components/DrawerBar';
import { DrawerHeaderStyled } from './components/MainLayoutStyled';

export default function MainLayout({ children }) {
 
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar 
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />

      <DrawerBar 
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeaderStyled />

        {children}
      </Box>
    </Box>
  );
}