import React from 'react';
import { Link } from 'react-router-dom';

const PhlickrProBar = (props) => {

    const display = props.currentUser ? (
        <div className="logged-detail">
            <div className="leftside-logo-container">
                <Link className="detail-title" to="/">
                    phlickr
                </Link>
            </div>
            <div className="rightside-logo-container">
                <div className="notification-bell-container">
                    <h1 className="notification-bell">.</h1>
                </div>
                <div className="greet-logout">
                    <button className="signbtn" onClick={() => props.logout()}>Log Out</button>
                </div>
            </div>
        </div>
    ) : (
        <Link className="detail-title" to="/">
            phlickr
        </Link>
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

export default PhlickrProBar;