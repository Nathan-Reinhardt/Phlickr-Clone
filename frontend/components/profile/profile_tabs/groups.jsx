import React from 'react';
import ProfileShowContainer from '../profile_show_container';
import { Link } from 'react-router-dom';

class Groups extends React.Component {
    
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
                <ProfileShowContainer />
                {display}
            </div>
        );
    }
}

export default Groups;