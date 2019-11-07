import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
    return (
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
                    <button className="signbtn-splash">Demo</button>
                </div>
            </div>
            <h1 className="splash-footer">.</h1>
        </div>
    );
};

export default Splash;