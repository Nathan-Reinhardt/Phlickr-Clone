import React from 'react';
import { Link } from 'react-router-dom';

const GreetingContainer = (props) => {

    const display = props.currentUser ? (
        <div className="welcome-container">
            <p className="welcome-message">Hello, {props.currentUser.first_name}, {props.currentUser.last_name}</p>
            <button className="signbtn" onClick={() => props.logout()}>Log Out</button>
        </div>
    ) : (
        <div className="redirect-userlog">
            <div className="relog">
                <Link className="logbtn" to="/login">Log In</Link>
            </div>
            <div className="resign">
                <Link className="signbtn" to="/signup">Sign Up</Link>
            </div>
        </div>
    );

    return (
        <div className="greeting-container">
            {display}
        </div>
    );
};

export default GreetingContainer;