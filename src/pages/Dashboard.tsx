import React from 'react';
import DaySelector from '../components/DaySelector';
import MembersList from '../components/MembersList/MembersList';
import SearchBar from '../components/SearchBar';
import { Container } from '@material-ui/core';

const Dashboard = () => {
  return (
    <Container maxWidth="md">
      <DaySelector />
      <hr />
      <SearchBar />
      <MembersList />
    </Container>
  );
};

export default Dashboard;
