import React from 'react';
import GreetingContainer from '../greeting/greeting_container';
import { Link } from 'react-router-dom';

const LogoDetailBar = (props) => {

    const display = props.currentUser ? (
        <div className="logged-detail">
            <label className="detail-title">phlickr</label>
            <div className="greet-logout">
                <Link className="hide-photos" to="/">Hide Photos</Link>
                <Link className="all-photos" to="/photos">All Photos</Link>
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