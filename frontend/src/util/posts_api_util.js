import axios from 'axios';

export const createPost = (postId, formData, config) => {
    return axios.put(`/api/posts/${postId}/photo`, formData, config)
}

export const uploadImage = (image, description, config) => {
    const formData = new FormData();
    formData.append("image", image)
    formData.append("description", description)
    debugger
    return axios.post('/api/posts/images', formData, config)
}


// export const getMessages = () => {
//     return axios.get('/api/messages')
// };

// export const getUserMessages = (userId) => (
//     axios.get(`/api/messages/user/${userId}`)
// );
// export const getLocationMessages = (locationId) => (
//     axios.get(`/api/messages/location/${locationId}`)
// );

// export const writeMessage = (message) => (
//     axios.post('/api/messages/', message)
// )