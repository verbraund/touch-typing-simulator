import {START_LESSON, STOP_LESSON, PAUSE_LESSON, RESUME_LESSON, CLEAN_LESSON} from "./types";
import {cleanText, setText} from "../text/actions";
import {saveToStat} from "../stat/actions";
import {generator} from "../../utils/generator";

export const completeLesson = () => {
    return (dispatch, getState) => {
        dispatch(stopLesson());
        dispatch(cleanText());
        const {lesson, text , settings} = getState();
        dispatch(saveToStat({lesson, text , settings}));
        dispatch(clearLesson());
    };
};

export const resetLesson = () => {
    return (dispatch) => {
        dispatch(stopLesson());
        dispatch(cleanText());
        dispatch(clearLesson());
    };
};

export const newLesson = () => {
    return (dispatch, getState) => {
        const {settings} = getState();
        dispatch(setText(generator(settings.keys.learning, settings.text.length)));
        dispatch(startLesson());
    };
};



export const startLesson = () => ({type: START_LESSON, payload: new Date()});
export const stopLesson = () => ({type: STOP_LESSON, payload: new Date()});
export const pauseLesson = () => ({type: PAUSE_LESSON, payload: new Date()});
export const resumeLesson = () => ({type: RESUME_LESSON, payload: new Date()});
export const clearLesson = () => ({type: CLEAN_LESSON});