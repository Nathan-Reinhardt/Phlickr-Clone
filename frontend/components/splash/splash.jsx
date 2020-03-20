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
            <div className="root-tab-content">
                <div className="logged-tabs-container">
                    <div className="tab-but-container">
                        <button className="all-activity-but">All Activity</button>
                        <button className="people-but">People</button>
                        <button className="groups-but">Groups</button>
                    </div>
                </div>
            </div>
            <div className="wholeadvert-container">
                <div>
                    <img className="ad-vert"/>
                </div>
            </div>
            <div className="phlickr-pro-container">
                <h1 className="phlickr-pro-message">
                    Upgrade to Phlickr Pro to hide these ads
                </h1>
            </div>
        </div>
    ) : (
        <div className="SLIDE-BG">
            <NavBar />
            <div className="splash-content">
                <div className="inspiration-content">
                    <div className="find-insp-cont">
                        <h1 className="find-insp">Find your inspiration.</h1>
                    </div>
                    <div className="insp-desc1-cont">
                        <h3 className="insp-desc1">
                        Join the Phlickr community, home to tens of billions of
                        </h3>
                    </div>
                    <div className="insp-desc2-cont">
                        <h3 className="insp-desc2">
                        photos and 2 million groups.
                        </h3>
                    </div>
                    <div className="splashbtn-container">
                        <Link className="signbtn-splash" to="/signup">Start for free</Link>
                    </div>
                    <div className="demo-container">
                        <button className="signbtn-splash" onClick={demouser}>Demo</button>
                    </div>
                </div>
                <h1 className="splash-footer">
                    <a className="github" href="https://github.com/Nathan-Reinhardt/Phlickr" target="_blank"><img className="github-icon" src="data:image/png;base64,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"/></a>
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