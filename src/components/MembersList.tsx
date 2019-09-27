import React, { useContext } from 'react';
import MemberElement from './MemberElement';
import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { MembersContext } from './MembersManager';
import {Member} from "../models/Member";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    memberList: {
      marginTop: '30px',
    },
      memberListPositive: {
        backgroundColor: 'red'
      },
      memberListNegative: {},
      membersListHeading: {
          margin: '40px 0 10px'
      },
  }),
);

interface Props {
    members?: Member[],
    type: string
}

const MembersList = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.memberList + (props.type === 'positive' ? classes.memberListPositive : classes.memberListNegative)}>
        <h3 className={classes.membersListHeading}>{(props.type === 'positive' ? 'Logged correctly:' : 'Worklogs missing:')}</h3>
      {props.members !== undefined &&
        props.members.map(member => {
          return (
            <MemberElement
              name={member.name}
              picture={member.picture}
              id={member.id}
              worklogs={member.worklogs}
              key={member.id}
            />
          );
        })}
    </div>
  );
};

export default MembersList;
