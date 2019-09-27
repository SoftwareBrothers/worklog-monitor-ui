import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { MembersContext } from './MembersManager';

const SearchBar = () => {
  const classes = useStyles();
  const members = useContext(MembersContext).updateVisibleMembers;
  const handleOnChage = (event: any) => {
    members(event.target.value.toLowerCase());
  };

  return (
    <form className={classes.container}>
      <TextField
        onChange={handleOnChage}
        id="standard-search"
        label="Search field"
        type="search"
        fullWidth
      />
    </form>
  );
};

const useStyles = makeStyles({
  container: {
    flexGrow: 1,
  },
});

export default SearchBar;
