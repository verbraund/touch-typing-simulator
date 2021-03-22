import {combineReducers} from "redux";
import {settingsReducer} from "../settings/reducer";
import {statReducer} from "../stat/reducer";
import {textReducer} from "../text/reducer";
import {lessonReducer} from "../lesson/reducer";


export default combineReducers({
    settings: settingsReducer,
    stat: statReducer,
    text: textReducer,
    lesson: lessonReducer,
});