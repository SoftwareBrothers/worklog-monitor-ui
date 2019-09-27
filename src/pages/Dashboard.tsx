import React, { useContext } from 'react';
import DaySelector from '../components/DaySelector';
import SearchBar from '../components/SearchBar';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import MembersSplitter from '../components/MembersSplitter';
import { MembersContext } from '../components/MembersManager';

const Dashboard = () => {
  const classes = useStyles();
  const { setDisplayedDate } = useContext(MembersContext);

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <Box display="flex" className={classes.inputs}>
        <SearchBar />
        <DaySelector defaultDay={new Date()} onChange={setDisplayedDate} />
      </Box>
      <MembersSplitter />
    </Container>
  );
};

const useStyles = makeStyles({
  inputs: {
    '& > :not(:last-child)': {
      paddingRight: 8,
    },
  },
  mainContainer: {
    marginTop: '50px',
  },
});

export default Dashboard;
