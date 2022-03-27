// import React from "react";
import { connect } from "react-redux";
import { logout, login, signup } from "../../actions/session_actions";

import HomeView from "./home_view";


const mSTP = (state = {}, ownProps) => {
    
    const userId = (state.session.user ? state.session.user.id: null)
    return{
        loggedIn: state.session.isAuthenticated,
        userId: userId,
        allState: state,
       
        modal: state.ui.modal
    }
}

const mDTP = (dispatch, ownProps) => ({
    logout: () => dispatch(logout()),
    login: (formUser) => dispatch(login(formUser)),
    signup: (formUser) => dispatch(signup(formUser)),
})

export default connect(mSTP, mDTP)(HomeView);