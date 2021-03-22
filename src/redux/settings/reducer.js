import {SET_TEXT_LENGTH,SET_LEARNING_KEY,REMOVE_LEARNING_KEY} from "./types";

const initialState = {
    keys: {
        learning: ['в', 'л','а', 'о'],
    },
    text: {
        length: 1000,
        min: 50,
        max: 2000,
        interval: 20
    }
};

export const settingsReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case SET_TEXT_LENGTH:
            return {...state, text: {...state.text, length: payload}};

        case SET_LEARNING_KEY:
            return {...state, keys: {...state.keys, learning: [...state.keys.learning, payload]}};

        case REMOVE_LEARNING_KEY:
            return {...state, keys: {...state.keys, learning: state.keys.learning.filter(i => i !== payload)}};

        default: return state;
    }

};