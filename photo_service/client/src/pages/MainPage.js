import React from 'react';
import classes from "../modules/MainPage.module.css"
import TestList from "../components/TestList";
import CreateButton from "../components/CreateButton";

const MainPage = () => {
    return (
        <div className={classes.MainPage}>
            <TestList/>
        </div>
    );
};

export default MainPage;