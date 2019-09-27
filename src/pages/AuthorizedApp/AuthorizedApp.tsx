import React from 'react';
import { MembersManager } from '../../components/MembersManager/MembersManager';
import UserAvatar from '../../components/UserAvatar/UserAvatar';
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const AuthorizedApp = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar color="default">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Worklog Monitor
          </Typography>
          <UserAvatar />
        </Toolbar>
      </AppBar>
      <MembersManager loading={false} members={undefined} />
    </>
  );
};

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

export default AuthorizedApp;
