import * as APIutil from "../util/posts_api_util";

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POST_ERROR = "RECEIVE_POST_ERROR";



const receivePost = (post) => ({
    type: RECEIVE_POST,
    post
});
const receiveError = (payload) => ({
    type: RECEIVE_POST_ERROR,
    payload
});

export const uploadImage = (image, description) => async dispatch => {
     const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };

    await APIutil.uploadImage(image, description, config)
    .then( (response) => dispatch(receivePost(response.data)))
    .catch( (errors) => errors.forEach( error => dispatch(receiveError( error.msg))) )

}


export const addPostPhoto = (postId, formData, history) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    };
    
    try {
        const response = await APIutil.createPost(postId, formData, config);
        dispatch(receivePost(response.data))

        // dispatch(setAlert('Photo Added!', 'success'));
       
    } catch( error) {
        const errors = error.response.data.errors;
        console.log(errors);
        if (errors) {
            errors.forEach( error => dispatch(receiveError( error.msg)))
        }

        dispatch(receiveError({msg: error.response.statusText, status: error.response.status}))
    }
};
