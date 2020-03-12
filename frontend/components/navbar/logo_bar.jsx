import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const LogoDetailBar = (props) => {

    const display = props.currentUser ? (
        <div className="logged-detail">
            <Link className="detail-title" to="/">
                phlickr
            </Link>
            <Link className="profile-link" to={`/people/${props.currentUser}`}>
                You
            </Link>
            <h1 className="explore-logged">Explore</h1>
            <div className="prints-container">
                <h1 className="prints-logged">Prints</h1>
                <h1 className="prints-new-logged">NEW</h1>
            </div>
            <h1 className="get-pro-logged">Get Pro</h1>
            <div className="greet-logout">
                <GreetingContainer />
            </div>
        </div>
    ) : (
        <label className="detail-title">phlickr</label>
    );
    
    return (
        <div className="detail-bar-container">
            <header className="detail-bar">
                <div className="detail-container">
                    {display}
                </div>
            </header>
        </div>
    );
};

export default LogoDetailBar;