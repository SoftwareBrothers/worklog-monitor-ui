import React from 'react';

interface Props {
  showAll: boolean;
}

const WorklogsList = (props: Props) => {
  let showAll = props.showAll;
  let listClassname = '';

  const toggleWorklogs = (): void => {
    if (showAll) {
      showAll = false;
      listClassname = '';
    }
    showAll = true;
    listClassname = 'active';
  };

  return (
    <div>
      <button onClick={toggleWorklogs}>Show all</button>
      <ul className={listClassname}>
        <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
        <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
        <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
        <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
        <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
        <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
        <li>26.09.2019 - Working hard on hackathon [ 16h 20m ]</li>
      </ul>
    </div>
  );
};

export default WorklogsList;
