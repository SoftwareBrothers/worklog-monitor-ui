import React, { useContext } from 'react';
import { MembersContext } from './MembersManager';
import MembersList from './MembersList';
import { Member } from '../models/Member';

const MembersSplitter = () => {
  const members = useContext(MembersContext).members;

  const getPositiveMembers = (members?: Member[]) => {
    if (!members) return;
    return members.filter(member => {
      return member.worklogs.length > 0;
    });
  };

  const getNegativeMembers = (members?: Member[]) => {
    if (!members) return;
    return members.filter(member => {
      return member.worklogs.length <= 0;
    });
  };

  const positiveMembers = getPositiveMembers(members);
  const negativeMembers = getNegativeMembers(members);

  return (
    <>
      {positiveMembers !== undefined && (
        <MembersList type={'positive'} members={positiveMembers.length > 0 ? positiveMembers : undefined} />
      )}
      {negativeMembers !== undefined && (
        <MembersList type={'negative'} members={negativeMembers.length > 0 ? negativeMembers : undefined} />
      )}
    </>
  );
};

export default MembersSplitter;
