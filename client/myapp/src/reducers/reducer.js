
import { FETCH_POST, CREATE_POST, LIKE_POST, DELETE_POST } from "../constants/actionType";


const reducer=(state=[],action) => {
     switch(action.type) {
         case FETCH_POST: return action.payload
         case CREATE_POST: return [...state, action.payload]
         default: return state
     }
}

export default reducer;