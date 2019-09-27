import React from 'react';

interface Props {
  name: string;
  picture: string;
}

const MemberElement = (props: Props) => {
  return (
    <div>
      <img src={props.picture} alt={props.name} />
      <span>{props.name}</span>
    </div>
  );
};

export default MemberElement;
