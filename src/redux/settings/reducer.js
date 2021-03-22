import {
    SET_LEARNING_KEY,
    REMOVE_LEARNING_KEY,
    SHOW_SETTINGS,
    HIDE_SETTINGS,
    INCREMENT_TEXT_LENGTH,
    DECREMENT_TEXT_LENGTH, SET_MAX_WORD_LENGTH
} from "./types";

const initialState = {
    display: true,
    keys: {
        learning: ['f'],
    },
    text: {
        length: 200,
        min: 50,
        max: 2000,
        interval: 20,
        word: {
            max: 11,
            min: 1
        }
    }
};

export const settingsReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case SHOW_SETTINGS:
            return {...state, display:true};

        case HIDE_SETTINGS:
            return {...state, display:false};

        case SET_MAX_WORD_LENGTH:
            return {...state, text: {...state.text, word: {...state.text.word, max: payload}}};

        case INCREMENT_TEXT_LENGTH:
            return {...state, text: {
                ...state.text,
                    length: state.text.length < state.text.max ?
                        state.text.length += state.text.interval : state.text.length
            }};
        case DECREMENT_TEXT_LENGTH:
            return {...state, text: {
                    ...state.text,
                    length: state.text.length - state.text.interval > state.text.min ?
                        state.text.length -= state.text.interval : state.text.length
                }};

        case SET_LEARNING_KEY:
            return {...state, keys: {...state.keys, learning: [...state.keys.learning, payload]}};

        case REMOVE_LEARNING_KEY:
            return {...state, keys: {...state.keys, learning: state.keys.learning.filter(i => i !== payload)}};

        default: return state;
    }

};