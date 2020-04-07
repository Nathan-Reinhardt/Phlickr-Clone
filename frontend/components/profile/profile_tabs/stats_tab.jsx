import React from 'react';
import ProfileShowContainer from '../profile_show_container';
import { Link } from 'react-router-dom';

class StatsTab extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className="stats-page-container">
                <div className="logged-tabs-container">
                    <div className="profile-tabs-container">
                        <button className="about-but">About</button>
                        <Link className="photostream-but" to={`/photos/${this.props.currentUser.id}`}>Photostream</Link>
                        <Link className="albums-but" to={`/photos/${this.props.currentUser.id}/albums`}>Albums</Link>
                        <Link className="faves-but" to={`/photos/${this.props.currentUser.id}/favorites`}>Faves</Link>
                        <Link className="gallery-but" to={`/photos/${this.props.currentUser.id}/galleries`}>Galleries</Link>
                        <Link className="profile-groups-but" to="/groups">Groups</Link>
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
                            <h2 className="sp-info-1">Introducing all new stats for Pro</h2>
                        </div>
                        <div className="sp-cont-2">
                            <h3 className="sp-info-2">
                                Gain an understanding of how people are discovering your Flickr photos. See which of your photos
                            </h3>
                        </div>
                        <div className="sp-cont-3">
                            <h3 className="sp-info-3">
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
                <ProfileShowContainer />
                {display}
            </div>
        );
    }
}

export default StatsTab;