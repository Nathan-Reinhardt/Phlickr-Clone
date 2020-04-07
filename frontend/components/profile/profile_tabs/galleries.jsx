import React from 'react';
import ProfileShowContainer from '../profile_show_container';
import { Link } from 'react-router-dom';

class Galleries extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const display = this.props.currentUser ? (
            <div className="below-page-container">
                <div className="logged-tabs-container">
                    <div className="profile-tabs-container">
                        <button className="about-but">About</button>
                        <Link className="photostream-but" to={`/photos/${this.props.currentUser.id}`}>Photostream</Link>
                        <Link className="albums-but" to={`/photos/${this.props.currentUser.id}/albums`}>Albums</Link>
                        <Link className="faves-but" to={`/photos/${this.props.currentUser.id}/favorites`}>Faves</Link>
                        <Link className="gallery-but-b" to={`/photos/${this.props.currentUser.id}/galleries`}>Galleries</Link>
                        <Link className="profile-groups-but" to="/groups">Groups</Link>
                        <Link className="stats-but" to={`/photos/${this.props.currentUser.id}/stats`}>Stats</Link>
                        <Link className="camera-roll-but" to="/cameraroll">Camera Roll</Link>
                    </div>
                </div>
                <div className="gallery-main-cont">
                    <div className="gallery-content-cont">
                        <div className="gallery-info-cont-1">
                            <h1 className="gallery-info-1">Your gallery walls are looking pretty bare.</h1>
                        </div>
                        <div className="gallery-info-cont-2">
                            <h3 className="gallery-info-2">
                                Galleries are a way to showcase other photographers’ photos and videos. When you see something
                            </h3>
                        </div>
                        <div className="gallery-info-cont-3">
                            <h3 className="gallery-info-3">
                                you love in Flickr, click the [+] icon to save it to a gallery.
                            </h3>
                        </div>
                        <div className="gallery-but-cont">
                            <button className="create-gallery-but">Create gallery</button>
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

export default Galleries;