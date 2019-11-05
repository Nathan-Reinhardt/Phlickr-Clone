import { connect } from "react-redux";
import { signup, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: `Sign Up`,
    formHeader: `Sign Up`,
    otherForm: `Log In`,
    otherFormUrl: `/login`,
    currentUser: state.session.id,
    bool: false
});

const mapDispatchToProps = (dispatch) => ({
    processForm: formUser => dispatch(signup(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);