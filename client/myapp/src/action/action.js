import { FETCH_POST, CREATE_POST, LIKE_POST, DELETE_POST } from "../constants/actionType";
import * as api from "../api/index";
const getPost=(data) => {
    return {
        type: FETCH_POST,
        payload: data
    }
}

export const createPost=(post) =>{
 return {
   type: CREATE_POST,
   payload: post
 }
}

export const deletePost=(id) => {
    return {
      type: DELETE_POST,
      payload: id
    }
}
export const likePost=(post)=>{
  return {type: LIKE_POST,
  payload: post
}}
export const asyncfetchPost=() => {
    return function(dispatch) {
      api.fetchPosts()
        .then(response => {
           const post=response.data.map((data) => data);
      
          dispatch(getPost(post));
        })
        .catch(error => console.log(error));
    }
}
export const asynccreatePost=(post) => {
  return function(dispatch) {
    console.log("Yes post ");
    console.log(post);
    api.createPost(post)
      .then(response => {
        const data=response.data;
        console.log("Yha gadbad h");
        console.log(response.config.data);
        console.log(data);
        dispatch(createPost(data));
      })
      .catch(error => {console.log(error)});
  }
}

export const asyncdeletePost=(id) => {

return function (dispatch) {
  console.log("Action id");
  console.log(id);
  api.deletePost(id)
   .then(response => {
     console.log(response.data);
     dispatch(deletePost(id))
   })
   .catch(error => {console.log(error)});
   
}
}
export const asyncLikePost=(id)=> {
  return function(dispatch) {
    api.likePost(id)
    .then(response => {
    const {data}=response.data; 
    dispatch(likePost(data))})
    .catch(err=> {console.log(err)});
  }
}