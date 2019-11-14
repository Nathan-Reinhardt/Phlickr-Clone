import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = props => (
    <li>
        <Link className="" to={`/photos/${props.photo.id}`}>
            
        </Link>
    </li>
)

export default PhotoIndexItem;