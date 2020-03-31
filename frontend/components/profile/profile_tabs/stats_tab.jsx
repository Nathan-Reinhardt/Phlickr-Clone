import React from 'react';
import LogoDetailBarContainer from '../../navbar/logo_bar_container';
import { Link } from 'react-router-dom';

class StatsTab extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cameraRoll: localStorage.getItem("camera")
        }
        this.spliceEmail = this.spliceEmail.bind(this);
    }

    spliceEmail() {
        let email = this.props.currentUser.email;
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

    render() {
        const display = this.props.currentUser ? (
            <div className="stats-page-container">
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
                                    {this.spliceEmail()}
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
                        <button className="gallery-but">Galleries</button>
                        <button className="profile-groups-but">Groups</button>
                        <Link className="stats-but-b" to={`/photos/${this.props.currentUser.id}/stats`}>Stats</Link>
                        <Link className="camera-roll-but" to="/cameraroll">Camera Roll</Link>
                    </div>
                </div>
                <div className="stats-pro-cont">
                    <div className="stats-content-cont">
                        <div className="phlickr-pro-image-cont">
                            <h1 className="phlickr-pro-image">.</h1>
                        </div>
                        <div className="sp-cont-1">
                            <h2 className="sp-info-1">Introducing all the new stats for Pro</h2>
                        </div>
                        <div className="sp-cont-2">
                            <h3>
                                Gain an understanding of how people are discovering your Flickr photos. See which of your photos
                            </h3>
                        </div>
                        <div className="sp-cont-3">
                            <h3>
                                are trending now and which have performed the best over the life of your Flickr account.
                            </h3>
                        </div>
                        <div className="learn-more-pro-cont">
                            <Link className="learn-more-pro-link">
                                Learn more about Pro
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            null
        );

        return (
            <div className="stats-page-container">
                <LogoDetailBarContainer />
                {display}
            </div>
        );
    }
}

export default StatsTab;