import { connect } from "react-redux";
import { login, clearErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: `Log In`,
    formHeader: `Log In`,
    otherForm: `Sign Up`,
    otherFormUrl: `/signup`,
    currentUser: state.session.id,
    bool: true
});

const mapDispatchToProps = (dispatch) => ({
    processForm: formUser => dispatch(login(formUser)),
    demoUser: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);