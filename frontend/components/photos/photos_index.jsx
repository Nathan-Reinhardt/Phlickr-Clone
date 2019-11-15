import React from 'react';
import PhotoIndexItem from './photo_index_item';
import LogoDetailBarContainer from '../navbar/logo_bar_container';

class PhotoIndex extends React.Component {

    componentDidMount() {
        this.props.showPhotos();
    }

    render() {
        if (this.props.photos === undefined) {
            return null;
        }
        // when there are no photos

        return (
            <div className="back-ground-photos">
                <LogoDetailBarContainer />
                <div className="photo-holder-background">
                    <ul className="photo-holder">
                        {
                        this.props.photos.map(photo => (
                            <PhotoIndexItem
                            photo={photo}
                            key={photo.id}
                            />
                        ))
                        }
                    </ul>
                </div>
            </div>
        )   // maybe add a link below ul to create a new photo
    }
}

export default PhotoIndex;