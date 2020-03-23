import React from 'react';
import LogoDetailBarContainer from '../navbar/logo_bar_container';

const ProfileShow = (props) => {

    const display = props.currentUser ? (
        <div className="profile-cover">
            <div className="profile-contents">
                <div>
                    <h1 className="profile-name">
                        {props.currentUser.first_name} {props.currentUser.last_name}
                    </h1>
                </div>
                <div>

                </div>
            </div>
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