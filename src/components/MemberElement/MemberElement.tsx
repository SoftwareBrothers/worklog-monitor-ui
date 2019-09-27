import React from 'react';
import WorklogsList from '../WorklogsList/WorklogsList';
import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';

interface Props {
  name: string;
  picture: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      padding: theme.spacing(2),
      borderRadius: '50%',
      width: '50px',
      height: '50px',
    }
  }),
);

const MemberElement = (props: Props) => {
  const classes = useStyles();

  return (
    <div>
      <img className={classes.avatar} src={props.picture} alt={props.name} />
      <span>{props.name}</span>
      <WorklogsList showAll={false} />
    </div>
  );
};

export default MemberElement;
