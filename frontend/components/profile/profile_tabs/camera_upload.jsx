import React from 'react';
import ProfileShowContainer from '../profile_show_container';
import { Link } from 'react-router-dom';

class CameraUpload extends React.Component {
    
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
                        <Link className="albums-but" to={`/photos/${this.props.currentUser.id}/albums`}>Albums</Link>
                        <Link className="faves-but" to={`/photos/${this.props.currentUser.id}/favorites`}>Faves</Link>
                        <Link className="gallery-but" to={`/photos/${this.props.currentUser.id}/galleries`}>Galleries</Link>
                        <Link className="profile-groups-but" to="/groups">Groups</Link>
                        <Link className="stats-but" to={`/photos/${this.props.currentUser.id}/stats`}>Stats</Link>
                        <Link className="camera-roll-but-b" to="/cameraroll">Camera Roll</Link>
                    </div>
                </div>
                <div className="camera-roll-main-cont">
                    <div className="cr-content">
                        <div className="lot-of-photos-cont">
                            <h1 className="lot-of-photos">
                                Got a lot of photos? We've got a lot of space.
                            </h1>
                        </div>
                        <div className="you-drag-drop-cont">
                            <h3 className="you-drag-drop">
                                You can drag and drop photos anywhere on this page
                            </h3> 
                        </div>
                        <div className="or-tag-cont">
                            <h3 className="or-tag">or</h3>
                        </div>
                        <div className="camera-photo-input-cont">
                            <label>
                                <input className="camera-photo-input" type="file"/>
                                <span className="select-files-span">Select files to upload</span>
                            </label>
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

export default CameraUpload;