import React from 'react';
import LogoDetailBarContainer from '../navbar/logo_bar_container';

const ProfileShow = (props) => {

    const spliceEmail = () => {
        let email = props.currentUser.email;
        let result = "";
        let letter = "";
        for (let i = 0; i < email.length; i++) {
            letter = email[i];
            if (letter === "@") {
                return result;
            }
            else {
                result += letter
            }
        }
    }

    const display = props.currentUser ? (
        <div className="profile-cover">
            <div className="profile-contents">
                <div>
                    <h1 className="profile-name">
                        {props.currentUser.first_name} {props.currentUser.last_name}
                    </h1>
                </div>
                <div className="email-follow-container">
                    <h1 className="short-email">
                        {spliceEmail()}
                    </h1>
                </div>
            </div>
        </div>
    ) : (
        null
    );

    return (
        <div className="profile-page-container">
            <LogoDetailBarContainer />
            {display}
        </div>
    );
}

export default ProfileShow;