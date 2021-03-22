import {COMPLETE_LESSON} from "./types";

const initialState = {
    lessons: []
};

export const statReducer = (state = initialState, {type, payload}) => {

    switch (type) {

        case COMPLETE_LESSON:
            return {...state, lessons: [...state.lessons, payload]};

        default: return state;
    }

};