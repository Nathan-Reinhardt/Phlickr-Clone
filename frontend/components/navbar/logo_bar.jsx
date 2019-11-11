import React from 'react';
import GreetingContainer from '../greeting/greeting_container';

const LogoDetailBar = (props) => {

    const display = props.currentUser ? (
        <div className="logged-detail">
            <label className="detail-title">phlickr</label>
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