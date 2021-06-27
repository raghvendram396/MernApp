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

export const asyncfetchPost=() => {
    return function(dispatch) {
      api.fetchPosts()
        .then(response => {
           const post=response.data.map((data) => data);
        //    console.log("Here");
        //    console.log(post.length);
        //    console.log(post);
          dispatch(getPost(post));
        })
        .catch(error => console.log(error));
    }
}
// export const asynccreatePost=(post)=> async (dispatch) => {
//   console.log("Yha pe")
//   console.log(post);
//   try{
//     const {data}=await api.createPost(post);
//     dispatch({type:CREATE_POST, payload: data});
//   }
//   catch(error){console.log(error.message);}
// }
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
