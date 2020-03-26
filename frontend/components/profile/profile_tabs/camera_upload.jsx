import React from 'react';
import LogoDetailBarContainer from '../../navbar/logo_bar_container';

class CameraUpload extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            cameraRoll: localStorage.getItem("camera")
        }
        this.spliceEmail = this.spliceEmail.bind(this);
        this.cameraRollButton = this.cameraRollButton.bind(this);
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

    cameraRollButton() {
        let currId = document.getElementById("no-camera-roll-cont").id;

        if (currId === "no-camera-roll-cont") {
            document.getElementById("no-camera-roll-cont").id = "camera-roll-cont";
            localStorage.setItem("camera", "true");
        }
    }

    componentDidMount() {
        if (localStorage.getItem("camera") === "true") {
            this.cameraRollButton();
        }
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
                                <h1 className="photo-upload-amount">
                                    0 Photos
                                </h1>
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
                        <button className="photostream-but">Photostream</button>
                        <button className="albums-but">Albums</button>
                        <button className="faves-but">Faves</button>
                        <button className="gallery-but">Galleries</button>
                        <button className="profile-groups-but">Groups</button>
                        <button className="stats-but">Stats</button>
                        <button className="camera-roll-but" onClick={this.cameraRollButton}>Camera Roll</button>
                    </div>
                </div>
                <div className="">
                    <div id="no-camera-roll-cont">
                        <h1 className="">I</h1>
                        <h3 className="">am</h3>
                        <h3 className="">jesus</h3>
                        <input className="camera-photo-input" type="file"/>
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