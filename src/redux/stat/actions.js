import {COMPLETE_LESSON} from "./types";

export const saveToStat = (lesson) => ({type: COMPLETE_LESSON, payload: lesson});