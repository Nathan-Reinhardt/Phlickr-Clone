import {
    createUser,
    postLogin,
    logoutSession,
    updateUser
} from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER';

export const receiveSessionErrors = errors => (
    {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
);

export const receiveCurrentUser = user => (
    {
        type: RECEIVE_CURRENT_USER,
        user
    }
);

export const logoutCurrentUser = () => (
    {
        type: LOGOUT_CURRENT_USER
    }
);

export const updateCurrentUser = () => (
    {
        type: UPDATE_CURRENT_USER
    }
);

export const clearErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

export const login = formUser => dispatch => postLogin(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail((error) => dispatch(receiveSessionErrors(error)));

export const logout = () => dispatch => logoutSession()
    .then(() => dispatch(logoutCurrentUser()))
    .fail((error) => dispatch(receiveSessionErrors(error)));

export const signup = formUser => dispatch => createUser(formUser)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail((error) => dispatch(receiveSessionErrors(error)));

export const updateDescript = () => dispatch => updateUser()
    .then(() => dispatch(receiveCurrentUser()))
    .fail((error) => dispatch(receiveSessionErrors(error)));