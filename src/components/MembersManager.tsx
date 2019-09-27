import React, { createContext, FC, useEffect, useState } from 'react';
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

  const [visibleMembers, setVisibleMembers] = useState('');
  const updateVisibleMembers = (phrase: string): void => {
    setVisibleMembers(phrase);
  };

  console.log(visibleMembers);
  console.log(members);

  return (
    <MembersContext.Provider
      value={{
        loading,
        members,
        visibleMembers: members.filter(member => {
          return member.name.toLowerCase().indexOf(visibleMembers) > -1;
        }),
        updateVisibleMembers,
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
  visibleMembers: Member[] | undefined;
  updateVisibleMembers: any;
}

export const MembersContext = createContext<MembersContextType>({
  loading: true,
  members: undefined,
  visibleMembers: undefined,
  updateVisibleMembers: () => {},
});
