import React, { createContext, FC, useState } from 'react';
import { Member } from '../models/Member';
import { CircularProgress, makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import Dashboard from '../pages/Dashboard';
import fakeMembers from '../fakeMembers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
    },
  }),
);

const getFakeMembers = (fakeMembers: any) => {
  return fakeMembers.map((member: any) => {
    return new Member(member, member.worklogs);
  });
};

export const MembersManager: FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState<Member[]>(getFakeMembers(fakeMembers));

  const [filters, setFilters] = useState('');

  const filteredMembers = members.filter(member => {
    return member.name.toLowerCase().indexOf(filters) > -1;
  });

  return (
    <MembersContext.Provider
      value={{
        loading,
        members: filteredMembers,
        setFilters,
      }}
    >
      {loading ? (
        <CircularProgress className={classes.progress} />
      ) : (
        <Dashboard />
      )}
    </MembersContext.Provider>
  );
};

interface MembersContextType {
  loading: boolean;
  members: Member[] | undefined;
  setFilters: (filters: string) => void;
}

export const MembersContext = createContext<MembersContextType>({
  loading: true,
  members: undefined,
  setFilters: () => {},
});
