// import React from "react";
import { connect } from "react-redux";
import { uploadImage } from "../util/posts_api_util";

import UploadForm from "./upload_form"

const mSTP = (state = {}, ownProps) => {
    
    return{
        
        currentUser: state.session.user,
        filterModal: state.ui.modal
       
    }
}

const mDTP = (dispatch, ownProps) => {
    // debugger
    return{
        uploadImage: (image, description) => uploadImage(image, description)
        
}};

export default connect(mSTP,mDTP)(UploadForm);