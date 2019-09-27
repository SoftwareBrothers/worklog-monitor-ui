import React, { createContext, FC } from 'react';
import { Member } from '../../models/Member';
import { CircularProgress, makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import Dashboard from '../../pages/dashboard/Dashboard';

interface Props {
  loading: boolean;
  members: Member[] | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    progress: {
      margin: theme.spacing(2),
    },
  }),
);

export const MembersManager: FC<Props> = ({ loading, members }) => {
  const classes = useStyles();

  return (
    <MembersContext.Provider value={{ loading, members }}>
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
}

const MembersContext = createContext<MembersContextType>({
  loading: true,
  members: undefined,
});
