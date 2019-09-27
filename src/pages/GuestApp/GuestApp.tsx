import React from 'react';
import LoginButton from '../../components/LoginButton';
import { CssBaseline, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const GuestApp = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <Typography className={classes.title} variant="h1">
          Worklog Monitor
        </Typography>
        <div className={classes.button}>
          <LoginButton />
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 40,
  },
  button: {
    height: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default GuestApp;
