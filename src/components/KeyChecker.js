import {connect} from "react-redux";
import {useEffect} from "react";
import {pushedCorrectlyKey, pushedWrongKey} from "../redux/text/actions";
import {completeLesson} from "../redux/lesson/actions";

const KeyChecker = ({text, settings, lesson, pushedCorrectlyKey, pushedWrongKey, completeLesson}) => {


    const {current, expect} = text;

    const keyPressHandler = (e) => {
        e.preventDefault();

        if(e.key === current.symbol){
            pushedCorrectlyKey();
        }else{
            pushedWrongKey();
        }

    };

    useEffect(() => {
        if(!expect.length && lesson.running && !current){
            completeLesson();
        }
    });

    useEffect(() => {
        if(lesson.running){
            document.addEventListener('keypress', keyPressHandler);
            return () => {
                document.removeEventListener('keypress', keyPressHandler);
            };
        }
    });

    return null;
};

export default connect(
    state => ({text: state.text, settings: state.settings, lesson: state.lesson}),
    {pushedCorrectlyKey, pushedWrongKey, completeLesson}
)(KeyChecker)