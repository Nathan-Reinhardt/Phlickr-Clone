import { connect } from 'react-redux';
import LogoDetailBar from './logo_bar';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
}); 

export default connect(
    mapStateToProps,
    null
)(LogoDetailBar);