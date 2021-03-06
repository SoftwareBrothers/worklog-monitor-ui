import React, { useState, useEffect } from 'react';
import { MembersManager } from '../components/MembersManager';
import UserAvatar from '../components/UserAvatar';
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Box,
  IconButton,
  Drawer,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const imgUrl =
  'https://recipes-secure-graphics.grocerywebsite.com/0_GraphicsRecipes/4589_4k.jpg';

const AuthorizedApp = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (document.images) {
      const img = new Image();
      img.src = imgUrl;
    }
  }, []);

  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <AppBar color="default" position="sticky">
        <Toolbar className={classes.toolbar}>
          <div>
            <IconButton onClick={() => setOpen(o => !o)}>
              <Menu />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
              <div className={classes.hamburger} />
            </Drawer>
          </div>
          <div>
            <Typography variant="h4">Worklog Monitor</Typography>
          </div>
          <div>
            <UserAvatar />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        display="flex"
        paddingTop={2}
        paddingBottom={2}
        flexGrow={1}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <MembersManager />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles({
  toolbar: {
    '& > *': {
      flexBasis: `${100 / 3}%`,
      display: 'flex',
    },
    '& > :nth-child(1)': {
      justifyContent: 'flex-start',
    },
    '& > :nth-child(2)': {
      justifyContent: 'center',
    },
    '& > :nth-child(3)': {
      justifyContent: 'flex-end',
    },
  },
  hamburger: {
    height: '100%',
    width: 400,
    maxWidth: '80vw',
    background: `url("${imgUrl}")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
});

export default AuthorizedApp;
