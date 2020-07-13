import React from 'react';
import { Link } from 'react-router-dom';

const LogoDetailBar = (props) => {

    const display = props.currentUser ? (
        <div className="logged-detail">
            <div className="leftside-logo-container">
                <Link className="detail-title" to="/">
                    phlickr
                </Link>
                <Link className="profile-link" to={`/photos/${props.currentUser.id}`}>
                    You
                </Link>
                <h1 className="explore-logged">Explore</h1>
                <div className="prints-container">
                    <h1 className="prints-logged">Prints</h1>
                </div>
                <Link className="get-pro-logged" to="/account/upgrade/pro">Get Pro</Link>
            </div>
            <div className="second-half-logged-nav">
                <div className="logged-search-box-container">
                    <h1 className="logged-mag-search">&#128269;</h1>
                    <input className="logged-search-text-box" type="text" placeholder="Photos, people, or groups"/>
                </div>
                <div className="rightside-logo-container">
                    <div className="cloud-icon-container">
                        <h1 className="cloud-icon">.</h1>
                    </div>
                    <div className="notification-bell-container">
                        <h1 className="notification-bell">.</h1>
                    </div>
                    <div className="greet-logout">
                        <button className="signbtn" onClick={() => props.logout()}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <label className="detail-title-2">phlickr</label>
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