import {HIDE_ERROR, PUSHED_KEY, RESET_TEXT, SHOW_ERROR, PUSH_ERROR_SYMBOL} from "./types";

export const pushedKey = (symbol) => ({type: PUSHED_KEY, payload: symbol});
export const pushedWrongKey = () => {
    return (dispatch) => {
        dispatch(showError());
        setTimeout(() => {
            dispatch(hideError());
        }, 150);
    };
};

export const showError = () => ({type: SHOW_ERROR});
export const hideError = () => ({type: HIDE_ERROR});
export const saveError = (symbol) => ({type: PUSH_ERROR_SYMBOL, payload: symbol});

export const setText = (text) => ({type: RESET_TEXT, payload: text});
export const cleanText = () => ({type: RESET_TEXT, payload: []});
