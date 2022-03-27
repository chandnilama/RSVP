import { RECEIVE_POST_ERROR } from "../actions/post_actions";

const initialState = []

const PostsErrorsReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_POST_ERROR:
            return action.payload.data
        
        default:
            return state;
    }
}



export default PostsErrorsReducer;