import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import LogoDetailBarContainer from '../navbar/logo_bar_container';

const Splash = (props) => {

    const demouser = (e) => {
        e.preventDefault();
        const demo = {
            email: "demo@demo.com",
            password: "password"
        }
        props.demoUser(demo)
            .then( () => props.history.push[`/`]);
    }

    const display = props.currentUser ? (
        <div className="logged-back-ground">
            <LogoDetailBarContainer />
            <div className="root-content">
                <h1 className="welcome-tag-site">Welcome to Phlickr!</h1>
            </div>
        </div>
    ) : (
        <div className="back-ground">
            <NavBar />
            <div className="splash-content">
                <div className="inspiration-content">
                    <h1 className="find-insp">Find your inspiration.</h1>
                    <h3 className="insp-desc1">
                    Join the Phlickr community, home to tens of billions of
                    </h3>
                    <h3 className="insp-desc2">
                    photos and 2 million groups.
                    </h3>
                    <div className="splashbtn-container">
                        <Link className="signbtn-splash" to="/signup">Sign Up</Link>
                    </div>
                    <div className="demo-container">
                        <button className="signbtn-splash" onClick={demouser}>Demo</button>
                    </div>
                </div>
                <h1 className="splash-footer">
                    <a className="github" href="https://github.com/Ticonderago/Full-Stack-Project" target="_blank">Phlickr's Github</a>
                </h1>
            </div>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    );
};

export default Splash;