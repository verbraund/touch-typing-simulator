import {PUSHED_CORRECTLY_KEY, RESET_TEXT,SHOW_ERROR, HIDE_ERROR, PUSHED_WRONG_SYMBOL} from "./types";

const initialState = {

    all: [],
    passed: [],
    expect: [],
    errors: [],
    current: null,
    wrong: false

};

export const textReducer = (state = initialState, {type, payload}) => {

    switch (type) {


        case PUSHED_CORRECTLY_KEY:
            return {
                ...state,
                passed: [...state.passed, state.current],
                current: state.expect.shift()
            };

        case PUSHED_WRONG_SYMBOL:
            return {
                ...state,
                errors: [...state.errors, state.current],
                passed: [...state.passed, {...state.current, error: true}],
                current: state.expect.shift()
            };

        case RESET_TEXT:
            return {...state, all:[...payload], errors: [], passed: [], current: payload.shift(), expect: payload};

        case SHOW_ERROR:
            return {...state, wrong: true};

        case HIDE_ERROR:
            return {...state, wrong: false};

        default: return state;
    }

};