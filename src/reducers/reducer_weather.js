import { GET_WEATHER } from "../actions";

export default function(state = [], action){
    // console.log('action receive in reducer', action)
    switch (action.type) {
        case GET_WEATHER:
            return [action.payload.data, ...state];
    }

    return state;
}