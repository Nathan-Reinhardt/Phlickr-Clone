import { connect } from 'react-redux';
import Splash from './splash';
import { login } from '../../actions/session_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    demoUser: user => dispatch(login(user))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);