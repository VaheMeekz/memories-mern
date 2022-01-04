export const CREATE = 'CREATE'
export const GET_POST = 'GET_POST'
import * as api from '../../api'

export const createAC = (post) => {
    return {
        type: CREATE,
        payload: post
    }
}

export const getPostAC = (post) => {
    return {
        type: GET_POST,
        payload: post
    }
}


