import {
    DECREMENT_TEXT_LENGTH, HIDE_SETTINGS,
    INCREMENT_TEXT_LENGTH,
    REMOVE_LEARNING_KEY,
    SET_LEARNING_KEY, SET_MAX_WORD_LENGTH,
    SHOW_SETTINGS
} from "./types";


export const setLearningKey = (k) => ({type: SET_LEARNING_KEY, payload: k});
export const removeLearningKey = (k) => ({type: REMOVE_LEARNING_KEY, payload: k});
export const incrementTextLength = () => ({type: INCREMENT_TEXT_LENGTH});
export const decrementTextLength = () => ({type: DECREMENT_TEXT_LENGTH});
export const showSettings = () => ({type: SHOW_SETTINGS});
export const hideSettings = () => ({type: HIDE_SETTINGS});

export const setMaxWordLength = (max) => ({type: SET_MAX_WORD_LENGTH, payload: max});

