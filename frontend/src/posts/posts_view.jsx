import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPostPhoto } from '../../action/post'

const AddPostPhoto = ({
    addPostPhoto,
    post: { post, loading },
    history,
    match
}) => {
    const [ file, setFile ] = useState('');
    const [ filename, setFilename ] = useState('Choose File');

    const onChange = event => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    };

    const onSubmit = event => {
        console.log(file);
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        addPostPhoto(post._id, formData, history);
    };

    return(
        <Fragment>
            <div>
                <div>
                    <div>
                        <h3>Upload Photo</h3>
                        <form onSubmit={onSubmit}>
                            <label htmlFor='customFile'>{filename}</label>
                            <input 
                                type="file"
                                className="inputfile"
                                id="customeFile"
                                onChange={onChange}
                            />
                            <input type='submit' id="Upload" />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

AddPostPhoto.propTypes = {
    addPostPhoto: PropTypes.func.isRequired,
    poast: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}


const mSTP = (state, ownProps) => {
    debugger
    return {
        post: state.post,
        auth: state.auth
    }
}


export default connect(mSTP, { addPostPhoto })(withRouter( AddPostPhoto ));