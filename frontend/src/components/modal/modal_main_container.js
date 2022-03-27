import { connect } from "react-redux";
import {openModal, closeModal} from "../../actions/modal_actions";
import ModalMainView from "./modal_main_view";
import {login, signup, logout} from "../../actions/session_actions"

const mSTP = (state, ownProps) => {
    
    const userId = (state.session.user ? state.session.user.id: null)
    const username = state.session.user ? state.session.user.username.split('@')[0]: null;
    
    return {
        username: username,
        userId: userId,
        loggedIn: state.session.isAuthenticated,
        modal: state.ui.modal,
     }


};

const mDTP = (dispatch, ownProps) => {

    return{
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal()),
        login: (user) => {dispatch(login(user)); dispatch(closeModal())},
        signup: (newFormUser) => {dispatch(signup(newFormUser)); dispatch(closeModal())},
        logout: () => {dispatch(logout()); dispatch(closeModal())}
    };
};

export default connect(mSTP,mDTP)(ModalMainView);