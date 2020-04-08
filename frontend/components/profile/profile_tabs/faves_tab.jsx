import React from 'react';
import ProfileShowContainer from '../profile_show_container';
import { Link } from 'react-router-dom';

class Faves extends React.Component {
    
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
                        <Link className="faves-but-b" to={`/photos/${this.props.currentUser.id}/favorites`}>Faves</Link>
                        <Link className="gallery-but" to={`/photos/${this.props.currentUser.id}/galleries`}>Galleries</Link>
                        <Link className="profile-groups-but" to="/groups">Groups</Link>
                        <Link className="stats-but" to={`/photos/${this.props.currentUser.id}/stats`}>Stats</Link>
                        <Link className="camera-roll-but" to="/cameraroll">Camera Roll</Link>
                    </div>
                </div>
                <div className="faves-main-cont">
                    <div className="faves-content-cont">
                        <div className="faves-info-1-cont">
                            <h1 className="faves-info-1">
                                Start picking your faves. Just click on the star.
                            </h1>
                        </div>
                        <div className="faves-info-2-cont">
                            <h3 className="faves-info-2">
                                Like something you see? Let the photographer know by clicking on the star icon.
                            </h3>
                        </div>
                        <div className="start-faves-but-cont">
                            <button className="start-faves-but">
                                Start exploring Phlickr
                            </button>
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

export default Faves;