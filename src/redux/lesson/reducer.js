import {
    START_LESSON,
    PAUSE_LESSON,
    STOP_LESSON,
    CLEAN_LESSON,
    RESUME_LESSON,
    SHOW_HELPER_KEYBOARD,
    HIDE_HELPER_KEYBOARD
} from "./types";

const initialState = {
    running: false,
    startedAt: null,
    pauses: [],
    stoppedAt: null,
    helper: {
        keyboard: true
    }
};

export const lessonReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case START_LESSON:
            return {...state, running: true, startedAt: payload};

        case PAUSE_LESSON:
            return {...state, running: false, pauses: [...state.pauses, {at: payload, to: null}]};

        case RESUME_LESSON:
            return {...state, running: true, pauses: state.pauses.map(p => {
                if(p.to === null)p.to = payload;
                return p;
            })};

        case STOP_LESSON:
            return {...state, running: false, stoppedAt: payload};

        case CLEAN_LESSON:
            return {...state, running: false, startedAt:null, stoppedAt: null, pauses: []};

        case SHOW_HELPER_KEYBOARD:
            return {...state, helper: {...state.helper, keyboard: true}};

        case HIDE_HELPER_KEYBOARD:
            return {...state, helper: {...state.helper, keyboard: false}};

        default: return state;
    }

};