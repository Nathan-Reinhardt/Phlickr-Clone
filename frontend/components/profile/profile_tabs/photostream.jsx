import React from 'react';
import ProfileShowContainer from '../profile_show_container';
import { Link } from 'react-router-dom';

class Photostream extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className="below-page-container">
                <div className="logged-tabs-container">
                    <div className="profile-tabs-container">
                        <button className="about-but">About</button>
                        <Link className="photostream-but-b" to={`/photos/${this.props.currentUser.id}`}>Photostream</Link>
                        <Link className="albums-but" to={`/photos/${this.props.currentUser.id}/albums`}>Albums</Link>
                        <Link className="faves-but" to={`/photos/${this.props.currentUser.id}/favorites`}>Faves</Link>
                        <Link className="gallery-but" to={`/photos/${this.props.currentUser.id}/galleries`}>Galleries</Link>
                        <Link className="profile-groups-but" to="/groups">Groups</Link>
                        <Link className="stats-but" to={`/photos/${this.props.currentUser.id}/stats`}>Stats</Link>
                        <Link className="camera-roll-but" to="/cameraroll">Camera Roll</Link>
                    </div>
                </div>
                <div className="photostream-main-cont">
                    <div className="photostream-top-bar">
                        <div className="photostream-dropdown-cont">
                            <div className="ps-date-uploaded-cont">
                                <h3 className="date-uploaded">
                                    Date uploaded
                                </h3>
                                <div className="arrow-cont">
                                    <h3 className="dropdown-arrow">&#x25BE;</h3>
                                </div>
                            </div>
                            <div className="ps-public-view-cont">
                                <h3 className="public-view">
                                    Public view
                                </h3>
                                <div className="arrow-cont">
                                    <h3 className="dropdown-arrow">&#x25BE;</h3>
                                </div>
                            </div>
                        </div>
                        <div className="photostream-share-cont">
                            <h1 className="share-arrow">.</h1>
                        </div>
                    </div>
                    <div className="photostream-content-cont">
                        <div className="ps-content">
                            <div className="no-public-photos-cont">
                                <h2 className="no-public-photos">You have no public photos.</h2>   
                            </div>
                            <div className="ps-info-cont">
                                <h3 className="ps-info">
                                    Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to
                                </h3>
                            </div>
                            <div className="ps-info-two-cont">
                                <h3 className="ps-info-two">populate your photostream.</h3> 
                            </div>
                            <div className="camera-upload-link-cont">
                                <Link className="to-camera-upload-link" to="/cameraroll">
                                    Go to Camera Roll
                                </Link> 
                            </div>
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

export default Photostream;