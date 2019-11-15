import React from 'react';
import LogoDetailBarContainer from '../navbar/logo_bar_container';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    componentDidMount() {
        this.props.requestPhoto(this.props.match.params.photoId);
    }

    render() {
        const display = this.props.photo ? (
            <div className="photo-holder-background">
                <ul className="show-ul">
                    <li className="show-li">
                        <img className="show-image" src={this.props.photo.photoUrl}/>
                    </li>
                    <ul className="image-text-container">
                        <li className="show-h3">
                            <h3 className="photo-title">{this.props.photo.title}</h3>
                        </li>
                        <li className="show-h3">
                            <h3 className="photo-description">{this.props.photo.description}</h3>
                        </li>
                        <li className="show-back">
                            <Link className="back-link" to="/photos">Back</Link>
                        </li>
                    </ul>
                </ul>
            </div>
        ) : (
            null
        );

        return (
            <div className="back-ground-photos">
                <LogoDetailBarContainer />
                {display}
            </div>
        );
    }
}

export default PostShow;