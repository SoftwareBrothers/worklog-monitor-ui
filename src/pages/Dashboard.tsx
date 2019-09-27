import React, { useState } from 'react';
import DaySelector from '../components/DaySelector';
import MembersList from '../components/MembersList';
import SearchBar from '../components/SearchBar';
import { Container, Box, Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';

const Dashboard = () => {
  const classes = useStyles();
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <Container className={classes.mainContainer} maxWidth="md">
      <Box display="flex" className={classes.inputs}>
        <SearchBar />
        <DaySelector defaultDay={date} onChange={setDate} />
      </Box>
      <MembersList />
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
