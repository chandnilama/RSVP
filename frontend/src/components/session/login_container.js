import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
// import SessionForm from './session_form';
import { Link } from "react-router-dom";
import SignIn from "./signin_mui";
import {openModal, closeModal} from "../../actions/modal_actions";

const mSTP = (state ={}, ownProps) => ({
    errors: state.errors.session,
    navLink: <Link to={'/signup'}>Sign up</Link>,
    formType: 'Log in'

})

const mDTP = (dispatch, ownProps) => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    login: (user) => dispatch(login(user)),
    action: (formUser) => dispatch(login(formUser))
})

// export default connect(mSTP,mDTP)(SessionForm);
export default connect(mSTP,mDTP)(SignIn);