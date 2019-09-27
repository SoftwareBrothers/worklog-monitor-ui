import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { MembersContext } from './MembersManager';

const SearchBar = () => {
  const classes = useStyles();
  const { setFilters } = useContext(MembersContext);
  const handleOnChage = (event: any) => {
    setFilters(event.target.value.toLowerCase());
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
