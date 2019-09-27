import React from 'react';
import WorklogsList from "../WorklogsList/WorklogsList";

interface Props {
  name: string;
  picture: string;
}

const MemberElement = (props: Props) => {
  return (
    <div>
      <img src={props.picture} alt={props.name} />
      <span>{props.name}</span>
        <WorklogsList showAll={false} />
    </div>
  );
};

export default MemberElement;
