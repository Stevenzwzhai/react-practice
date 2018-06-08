import {FETCH_LIST, RECEIVE_LIST} from "../contents";

export const getList = (sub) => {
    return {
        type: FETCH_LIST,
        sub
    }
}

export const receiveList = (sub, json) =>{
    return {
        type: RECEIVE_LIST,
        sub,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}