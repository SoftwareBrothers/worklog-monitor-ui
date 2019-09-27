import React from 'react';
import DaySelector from "../../components/day-selector/DaySelector";
import MembersList from "../../components/members-list/MembersList";

const Dashboard = () => {
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col col-md-6'}>
                    <DaySelector/>
                    <hr />
                    <MembersList />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
