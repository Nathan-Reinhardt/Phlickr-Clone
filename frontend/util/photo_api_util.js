export const fetchAllPhotos = () => (
    $.ajax({
        url: `/api/photos`,
        method: `GET`
    })
)

export const fetchOnePhoto = photoId => (
    $.ajax({
        url: `/api/photos/${photoId}`,
        method: `GET`
    })
);


export const createPhoto = photo => (
    $.ajax({
        url: `/api/photos`,
        method: `POST`,
        data: { photo }
    })
);

// come back and add ajax calls for update and delete