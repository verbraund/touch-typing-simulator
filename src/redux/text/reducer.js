import {PUSHED_KEY, RESET_TEXT,SHOW_ERROR, HIDE_ERROR, PUSH_ERROR_SYMBOL} from "./types";

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

        case PUSHED_KEY:
            return {...state, passed: [...state.passed, payload], expect: state.expect.slice(1)};

        case RESET_TEXT:
            return {...state, passed: [], expect: payload};

        case SHOW_ERROR:
            return {...state, wrong: true};

        case HIDE_ERROR:
            return {...state, wrong: false};

        case PUSH_ERROR_SYMBOL:
            return {...state, errors: [...state.errors, payload]};

        default: return state;
    }

};