import React from 'react';
import DaySelector from "../../components/day-selector/DaySelector";
import MembersList from "../../components/members-list/MembersList";
import SearchBar from "../../components/search-bar/SearchBar";

const Dashboard = () => {
    return(
        <div className={'container'}>
            <div className={'row'}>
                <div className={'col col-md-6'}>
                    <DaySelector/>
                    <hr />
                    <SearchBar />
                    <MembersList />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
