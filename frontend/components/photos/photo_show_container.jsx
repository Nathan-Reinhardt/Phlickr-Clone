import { connect } from 'react-redux';
import { requestPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mapStateToProps = (state, ownProps) => {
    return {
        photo: state.entities.photos[ownProps.match.params.photoId]
    }
};

const mapDispatchToProps = dispatch => ({
    requestPhoto: photoId => dispatch(requestPhoto(photoId))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(PhotoShow);