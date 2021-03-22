import {connect} from "react-redux";
import {useEffect} from "react";
import {pushedKey, pushedWrongKey, saveError} from "../redux/text/actions";
import {completeLesson} from "../redux/lesson/actions";

const KeyChecker = ({text, settings, lesson, saveError, pushedKey, pushedWrongKey, completeLesson}) => {

    const localExpect = [...text.expect];
    const expect = localExpect.shift();


    const keyPressHandler = (e) => {

        if(e.key === expect){
            pushedKey(e.key);
            if(!localExpect.length){
                completeLesson()
            }
        }else{
            pushedWrongKey();
            saveError(expect);
        }

    };

    useEffect(() => {
        document.addEventListener('keypress', keyPressHandler);
        return () => {
            document.removeEventListener('keypress', keyPressHandler);
        };
    });

    return null;
};

export default connect(
    state => ({text: state.text, settings: state.settings, lesson: state.lesson}),
    {saveError, pushedKey, pushedWrongKey, completeLesson}
)(KeyChecker)