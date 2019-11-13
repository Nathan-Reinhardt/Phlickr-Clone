import {
    fetchAllPhotos,
    fetchOnePhoto,
    createPhoto
} from '../util/photo_api_util';

export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const RECIEVE_PHOTO = "RECEIVE_PHOTO";

const receivePhoto = photo => ({
    type: RECIEVE_PHOTO,
    photo
})

export const requestPhotos = () => dispatch => fetchAllPhotos()
    .then(photos => dispatch( { type: "RECEIVE_PHOTOS", photos})
);

export const requestPhoto = photoId => dispatch => fetchOnePhoto(photoId)
    .then(photo => dispatch( { type: "RECEIVE_PHOTO", photo })
);

export const makePhoto = photo => dispatch => createPhoto(photo)
    .then(photo => dispatch(receivePhoto(photo))
);