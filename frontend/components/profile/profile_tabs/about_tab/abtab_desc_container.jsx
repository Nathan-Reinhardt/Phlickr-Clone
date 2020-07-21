import { connect } from "react-redux";
import DescriptionAbout from "./abtab_desc";
import { logout, updateDescript } from '../../../../actions/session_actions';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id],
    descBool: false
});

const mapDispatchToProps = (dispatch) => ({
    updateDescription: description => dispatch(updateDescript(description)),
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DescriptionAbout);