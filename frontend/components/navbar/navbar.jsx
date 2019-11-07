import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";

const NavBar = () => {
    return (
        <header className="main-nav">
            <nav className="left-nav">
                <Link className="site-title" to="/">phlickr</Link>
            </nav>
            <div className="search-box-container">
                <label className="mag-search">&#128269;</label>
                <input className="search-text-box" type="text" placeholder="Photos, people, or groups"/>
            </div>
            <nav className="right-nav">
                <GreetingContainer />
            </nav>
        </header>
    );
};

export default NavBar;