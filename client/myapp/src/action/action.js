import { FETCH_POST, CREATE_POST, LIKE_POST, DELETE_POST } from "../constants/actionType";
import * as api from "../api/index";
const getPost=(data) => {
    return {
        type: FETCH_POST,
        payload: data
    }
}


export const asyncfetchPost=() => {
    return function(dispatch) {
      api.fetchPosts()
        .then(response => {
           const post=response.data.map((data) => data);
           console.log("Here");
           console.log(post.length);
           console.log(post);
          dispatch(getPost(post));
        })
        .catch(error => console.log(error));
    }
}

