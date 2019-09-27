import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { MembersContext } from '../MembersManager/MembersManager';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {},
  }),
);

const SearchBar = () => {
  const classes = useStyles();
  const members = useContext(MembersContext).updateVisibleMembers;
  const handleOnChage = (event: any) => {
    members(event.target.value.toLowerCase());
  };

  return (
    <div>
      <form>
        <TextField
          onChange={handleOnChage}
          id="standard-search"
          label="Search field"
          type="search"
          className={`MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl ${classes.textField}`}
          fullWidth
          margin="normal"
        />
      </form>
    </div>
  );
};

export default SearchBar;
