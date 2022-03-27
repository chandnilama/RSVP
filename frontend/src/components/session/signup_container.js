import React from "react";
import { connect } from "react-redux";
// import SessionForm from './session_form';
import { Link } from "react-router-dom";
import SignUp from "./signup_mui";
import {login, signup} from "../../actions/session_actions"
import {openModal, closeModal} from "../../actions/modal_actions";


const mSTP = (state ={}, ownProps) => {
    
    return {loggedIn: state.session.isAuthenticated,
    errors: state.errors.session,
    navLink: <Link to={'/login'}>Log in</Link>,
    formType: 'Sign up'}
}

const mDTP = (dispatch, ownProps) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
    action: (newFormUser) => dispatch(signup(newFormUser))
})

// export default connect(mSTP,mDTP)(SessionForm);
export default connect(mSTP,mDTP)(SignUp);