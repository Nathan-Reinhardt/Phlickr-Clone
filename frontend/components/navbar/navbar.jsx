import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from "../greeting/greeting_container";

const NavBar = () => {

    function magSearchFocus() {
        document.getElementById("magSearch").style.opacity = "1";
    }

    function magSearchBlur() {
        document.getElementById("magSearch").style.opacity = "0.7";
    }

    return (
        <header className="main-nav">
            <nav className="left-nav">
                <Link className="site-title" to="/">phlickr</Link>
            </nav>
            <div className="search-box-container">
                <label id="magSearch" className="mag-search">&#128269;</label>
                <input className="search-text-box" onFocus={magSearchFocus} onBlur={magSearchBlur} type="text" placeholder="Photos, people, or groups"/>
            </div>
            <nav className="right-nav">
                <GreetingContainer />
            </nav>
        </header>
    );
};

export default NavBar;