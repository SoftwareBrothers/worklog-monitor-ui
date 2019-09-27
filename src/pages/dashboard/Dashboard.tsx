import React from 'react';
import DaySelector from "../../components/DaySelector/DaySelector";
import MembersList from "../../components/MembersList/MembersList";
import SearchBar from "../../components/SearchBar/SearchBar";

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
