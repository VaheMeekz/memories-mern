import {CREATE} from "../Actions/postAtction";

const initialState = {
    posts:[]
}

export const postReducer = (state = initialState, action) => {
  switch (action.type){
      case CREATE:
          return {
            ...state,
              posts: action.payload
          }
      case GET_POST:
          return {
              ...state,
              posts: action.payload
          }
      default:
          return state
  }
}