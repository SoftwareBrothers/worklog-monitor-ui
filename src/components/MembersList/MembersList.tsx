import React from 'react';
import fakeMembers from '../../fakeMembers';
import { Member } from '../../models/Member';
import MemberElement from '../MemberElement/MemberElement';

const getFakeMembers = () => {
  return fakeMembers;
};

const MembersList = () => {
  const members: Member[] | undefined = getFakeMembers();

  return (
    <div className={'members-list'}>
      {members !== undefined &&
        members.map(member => {
          return (
            <MemberElement
              name={member.name}
              picture={member.picture}
              key={member.id}
            />
          );
        })}
    </div>
  );
};

export default MembersList;
