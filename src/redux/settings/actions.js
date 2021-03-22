import {REMOVE_LEARNING_KEY, SET_LEARNING_KEY, SET_TEXT_LENGTH} from "./types";


export const setTextLength = (l) => ({type: SET_TEXT_LENGTH, payload: l});
export const setLearningKey = (k) => ({type: SET_LEARNING_KEY, payload: k});
export const removeLearningKey = (k) => ({type: REMOVE_LEARNING_KEY, payload: k});
