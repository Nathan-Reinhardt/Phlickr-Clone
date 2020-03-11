import React from 'react';
import LogoDetailBarContainer from '../navbar/logo_bar_container';
import { Link } from 'react-router-dom';

const ProfileShow = (props) => {

    const display = props.currentUser ? (
        <div className="photo-holder-background">
            <h1>Placeholder hello there :)</h1>
        </div>
    ) : (
        null
    );

    return (
        <div className="backkkk">
            <LogoDetailBarContainer />
            {display}
        </div>
    );
}

export default ProfileShow;