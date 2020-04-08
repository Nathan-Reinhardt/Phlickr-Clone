import React from 'react';
import ProfileShowContainer from '../profile_show_container';
import { Link } from 'react-router-dom';

class Albums extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className="below-page-container">
                <div className="logged-tabs-container">
                    <div className="profile-tabs-container">
                        <Link className="about-but" to={`/people/${this.props.currentUser.id}`}>About</Link>
                        <Link className="photostream-but" to={`/photos/${this.props.currentUser.id}`}>Photostream</Link>
                        <Link className="albums-but-b" to={`/photos/${this.props.currentUser.id}/albums`}>Albums</Link>
                        <Link className="faves-but" to={`/photos/${this.props.currentUser.id}/favorites`}>Faves</Link>
                        <Link className="gallery-but" to={`/photos/${this.props.currentUser.id}/galleries`}>Galleries</Link>
                        <Link className="profile-groups-but" to="/groups">Groups</Link>
                        <Link className="stats-but" to={`/photos/${this.props.currentUser.id}/stats`}>Stats</Link>
                        <Link className="camera-roll-but" to="/cameraroll">Camera Roll</Link>
                    </div>
                </div>
                <div className="album-main-cont">
                    <div className="album-content-cont">
                        <div className="album-info-1-cont">
                            <h1 className="album-info-1">Let's make an album.</h1>
                        </div>
                        <div className="album-info-2-cont">
                            <h3 className="album-info-2">
                                Easily organize all your photos into beautiful albums to share with friends, family, or even other
                            </h3>
                        </div>
                        <div className="album-info-3-cont">
                            <h3 className="album-info-3">Phlickr memebers.</h3>
                        </div>
                        <div className="album-crb-cont">
                            <Link className="album-camera-roll-but" to="/cameraroll">Go to Camera Roll</Link>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            null
        );

        return (
            <div className="profile-page-container">
                <ProfileShowContainer />
                {display}
            </div>
        );
    }
}

export default Albums;