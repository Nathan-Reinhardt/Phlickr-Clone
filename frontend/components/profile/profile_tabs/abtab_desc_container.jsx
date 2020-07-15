import { connect } from "react-redux";
import DescriptionAbout from "./abtab_desc";
import { logout } from '../../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    descBool: false
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DescriptionAbout);