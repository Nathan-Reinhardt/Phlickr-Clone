import { connect } from "react-redux";
import { requestPhotos } from "../../actions/photo_actions";
import PhotosIndex from "./photos_index";

const mapStateToProps = (state) => ({
    currentUser: state.session.id,
    photos: Object.values(state.entities.photos)
});

const mapDispatchToProps = (dispatch) => ({
    showPhotos: () => dispatch(requestPhotos())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotosIndex);