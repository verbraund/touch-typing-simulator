import {HIDE_ERROR, PUSHED_CORRECTLY_KEY, RESET_TEXT, SHOW_ERROR, PUSHED_WRONG_SYMBOL} from "./types";

export const pushedCorrectlyKey = () => ({type: PUSHED_CORRECTLY_KEY});
export const pushedWrongKey = () => {
    return (dispatch) => {
        dispatch(saveError());
        dispatch(showError());
        setTimeout(() => {
            dispatch(hideError());
        }, 150);
    };
};

export const showError = () => ({type: SHOW_ERROR});
export const hideError = () => ({type: HIDE_ERROR});
export const saveError = () => ({type: PUSHED_WRONG_SYMBOL});

export const setText = (text) => ({type: RESET_TEXT, payload: text.map(k => ({symbol: k, error: false}))});
export const cleanText = () => ({type: RESET_TEXT, payload: []});
