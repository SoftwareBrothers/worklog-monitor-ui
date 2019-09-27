import React, { useContext } from 'react';
import MemberElement from '../MemberElement/MemberElement';
import { makeStyles, Theme } from '@material-ui/core';
import { createStyles } from '@material-ui/styles';
import { MembersContext } from '../MembersManager/MembersManager';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    memberList: {
      marginTop: '30px',
    },
  }),
);

const MembersList = () => {
  const members = useContext(MembersContext).visibleMembers;
  const classes = useStyles();

  return (
    <div className={classes.memberList}>
      {members !== undefined &&
        members.map(member => {
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
