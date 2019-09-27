import React, { createContext, FC, useState, useEffect } from 'react';
import { Member } from '../models/Member';
import { CircularProgress, makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import Dashboard from '../pages/Dashboard';
import useRequest from '../hooks/useRequest';
import { format } from 'date-fns';

export const MembersManager: FC = () => {
  const classes = useStyles();

  const [displayedDate, setDisplayedDate] = useState<Date>(new Date());
  const formatted = format(displayedDate, 'dd-MM-yyyy');

  const [members, setMembers] = useState<{ [key: string]: Member[] }>({});

  const [request, loading, error] = useRequest(
    (date: string) => ({
      url: `/api/aggregator/worklogs`,
      params: { date },
    }),
    (data, date) =>
      setMembers(prev => ({
        ...prev,
        [date]: data.map((d: any) => new Member(d, d.worklogs)),
      })),
    [],
  );

  useEffect(() => {
    if (members[formatted]) {
      return;
    }
    request(formatted);
  }, [formatted, members, request]);

  const [filters, setFilters] = useState('');

  const filteredMembers = members[formatted]
    ? members[formatted].filter(member => {
        return member.name.toLowerCase().indexOf(filters) > -1;
      })
    : undefined;

  return (
    <MembersContext.Provider
      value={{
        loading,
        members: filteredMembers,
        setFilters,
        setDisplayedDate,
      }}
    >
      {loading ? (
        <CircularProgress className={classes.progress} size={40} />
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
  setDisplayedDate: (date: Date) => void;
}

export const MembersContext = createContext<MembersContextType>({
  loading: true,
  members: undefined,
  setFilters: () => {},
  setDisplayedDate: () => {},
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
    },
  }),
);
