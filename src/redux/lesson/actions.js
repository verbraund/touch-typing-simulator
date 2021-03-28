import {
    START_LESSON,
    STOP_LESSON,
    PAUSE_LESSON,
    RESUME_LESSON,
    CLEAN_LESSON,
    SHOW_HELPER_KEYBOARD,
    HIDE_HELPER_KEYBOARD
} from "./types";
import {cleanText, setText} from "../text/actions";
import {saveToStat} from "../stat/actions";
import {generator} from "../../utils/generator";
import {hideSettings, showSettings} from "../settings/actions";

export const completeLesson = () => {
    return (dispatch, getState) => {
        dispatch(stopLesson());
        dispatch(cleanText());
        const {lesson, text , settings} = getState();
        dispatch(saveToStat({lesson, text , settings}));
        dispatch(clearLesson());
        dispatch(showSettings());
    };
};

export const resetLesson = () => {
    return (dispatch) => {
        dispatch(stopLesson());
        dispatch(cleanText());
        dispatch(clearLesson());
        dispatch(showSettings());
    };
};

export const newLesson = () => {
    return (dispatch, getState) => {
        const {settings} = getState();
        dispatch(hideSettings());
        dispatch(setText(
            generator(
                settings.keys.learning,
                settings.text.length,
                settings.text.word.max,
                settings.text.word.min
            )
        ));
        dispatch(startLesson());
    };
};



export const startLesson = () => ({type: START_LESSON, payload: new Date()});
export const stopLesson = () => ({type: STOP_LESSON, payload: new Date()});
export const pauseLesson = () => ({type: PAUSE_LESSON, payload: new Date()});
export const resumeLesson = () => ({type: RESUME_LESSON, payload: new Date()});
export const showHelperKeyboard = () => ({type: SHOW_HELPER_KEYBOARD});
export const hideHelperKeyboard = () => ({type: HIDE_HELPER_KEYBOARD});
export const clearLesson = () => ({type: CLEAN_LESSON});