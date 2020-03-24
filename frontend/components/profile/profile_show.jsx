import React from 'react';
import LogoDetailBarContainer from '../navbar/logo_bar_container';

const ProfileShow = (props) => {

    const spliceEmail = () => {
        let email = props.currentUser.email;
        let result = "";
        let letter = "";
        let count = 0;
        for (let i = 0; i < email.length; i++) {
            letter = email[i];
            if (letter === "@") {
                return result;
            }
            else if (count === 28) {
                result += "...";
                return result;
            }
            else {
                result += letter
                count++;
            }
        }
    }

    const display = props.currentUser ? (
        <div className="profile-page-container">
            <div className="profile-cover">
                <div className="profile-contents">
                    <div>
                        <h1 className="profile-name">
                            {props.currentUser.first_name} {props.currentUser.last_name}
                        </h1>
                    </div>
                    <div className="full-content-container">
                        <div className="email-follow-container">
                            <h1 className="short-email">
                                {spliceEmail()}
                            </h1>
                            <h1 className="followers-count">
                                0 Followers
                            </h1>
                            <h1 className="white-dot">
                                .
                            </h1>
                            <h1 className="following-count">
                                0 Following
                            </h1>
                        </div>
                        <div className="photo-joined-container">
                            <h1 className="photo-upload-amount">
                                0 Photos
                            </h1>
                            <h1 className="joined-date">
                                Joined 2020
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="logged-tabs-container">
                <div className="tab-but-container">
                    <button className="about-but">About</button>
                    <button className="photostream-but">Photostream</button>
                    <button className="almbums-but">Albums</button>
                    <button className="faves-but">Faves</button>
                    <button className="gallery-but">Galleries</button>
                    <button className="groups-but">Groups</button>
                    <button className="stats-but">Stats</button>
                    <button className="camera-roll-but">Camera Roll</button>
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