import React from 'react';
import LogoDetailBarContainer from '../../navbar/logo_bar_container';
import { Link } from 'react-router-dom';
import { spliceEmail } from '../../../../app/assets/javascripts/functions';

class CameraUpload extends React.Component {
    
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
                        <button className="gallery-but">Galleries</button>
                        <button className="profile-groups-but">Groups</button>
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
                <LogoDetailBarContainer />
                {display}
            </div>
        );
    }
}

export default CameraUpload;