import {
    RECEIVE_PHOTOS,
    RECIEVE_PHOTO
} from '../actions/photo_actions';

const photosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PHOTOS:
            return Object.assign({}, oldState, action.photos)
        case RECIEVE_PHOTO:
            return Object.assign({}, oldState, { [action.photo.id]: action.photo })
        default:
            return oldState;
    }
};

export default photosReducer;