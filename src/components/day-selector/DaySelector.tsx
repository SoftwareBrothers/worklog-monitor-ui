import React from 'react';

const DaySelector = () => {
    return(
        <div>
            Switch day: <select>
            <option>Today</option>
            <option>Yesterday</option>
            <option>2 days ago</option>
            <option>3 days ago</option>
            <option>4 days ago</option>
        </select>
        </div>
    );
};

export default DaySelector;
