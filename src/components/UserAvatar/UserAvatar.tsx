import { Avatar, Button, Typography, Tooltip } from '@material-ui/core';
import React, { FC } from 'react';
import { useLogout, useUser } from '../AuthManager';
import { makeStyles } from '@material-ui/styles';

const UserAvatar: FC = () => {
  const classes = useStyles();
  const { name, picture } = useUser();
  const logout = useLogout();
  return (
    <Tooltip title="Logout">
      <Button onClick={logout}>
        <Typography className={classes.name} variant="h6">
          {name}
        </Typography>
        <Avatar src={picture} alt={name} />
      </Button>
    </Tooltip>
  );
};

const useStyles = makeStyles({
  name: {
    paddingRight: 10,
    textTransform: 'none',
  },
});

export default UserAvatar;
