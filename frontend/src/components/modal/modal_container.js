import { connect } from "react-redux";
import {openModal, closeModal} from "../../actions/modal_actions";
import ModalView from "./modal_view";

const mSTP = (state, ownProps) => {
    
    return {
        modal: state.ui.modal
    };
};

const mDTP = (dispatch, ownProps) => {

    return{
        openModal: (modal) => dispatch(openModal(modal)),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP,mDTP)(ModalView);