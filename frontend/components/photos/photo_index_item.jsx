import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props => (
    <li className="image-item">
        <Link className="link-image" to={`/photos/${props.photo.id}`}>
            <img className="image" src={props.photo.photoUrl}/>
        </Link>
    </li>
)

export default PhotoIndexItem;