import React from 'react';
import LogoDetailBarContainer from '../../navbar/logo_bar_container';
import { Link } from 'react-router-dom';
import { spliceEmail } from '../../../../app/assets/javascripts/functions';

class Groups extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className="profile-page-container">
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
                                <h1 className="joined-date">
                                    Joined 2020
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logged-tabs-container">
                    <div className="profile-tabs-container">
                        <button className="about-but">About</button>
                        <Link className="photostream-but" to={`/photos/${this.props.currentUser.id}`}>Photostream</Link>
                        <button className="albums-but">Albums</button>
                        <button className="faves-but">Faves</button>
                        <Link className="gallery-but" to={`/photos/${this.props.currentUser.id}/galleries`}>Galleries</Link>
                        <Link className="profile-groups-but-b" to="/groups">Groups</Link>
                        <Link className="stats-but" to={`/photos/${this.props.currentUser.id}/stats`}>Stats</Link>
                        <Link className="camera-roll-but" to="/cameraroll">Camera Roll</Link>
                    </div>
                </div>
                <div className="groups-main-cont">
                    <div className="gps-cont">
                        <div className="groups-main-content">
                            <h1 className="rec-dis-link">Recent Discussions</h1>
                            <button className="create-groups-but">Create Group</button>
                        </div>
                        <div className="groups-info-cont">
                            <h2 className="groups-info-1">
                                Phlickr groups are a great way to share photos, post comments, and hold discussions around a common theme.
                            </h2>
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

export default Groups;