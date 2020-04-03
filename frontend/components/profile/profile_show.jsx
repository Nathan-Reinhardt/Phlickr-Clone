import React from 'react';
import LogoDetailBarContainer from '../navbar/logo_bar_container';
import { spliceEmail } from '../../../app/assets/javascripts/functions';

class ProfileShow extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className="profile-cover">
                <div className="profile-contents">
                    <div>
                        <h1 className="profile-name">
                            {this.props.currentUser.first_name} {this.props.currentUser.last_name}
                        </h1>
                    </div>
                    <div className="full-content-container">
                        <div className="email-follow-container">
                            <h1 className="short-email">
                                {spliceEmail(this.props.currentUser.email)}
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
}

export default ProfileShow;