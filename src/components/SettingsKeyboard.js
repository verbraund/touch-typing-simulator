import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {removeLearningKey, setLearningKey} from "../redux/settings/actions";
import Keyboard from "./Keyboard";



const SettingsKeyboard = ({settings, setLearningKey, removeLearningKey}) => {


    const isActiveKey = (k) => {
        return settings.keys.learning.includes(k);
    };

    const toggleLearningKeyHandler = (e) => {
        e.preventDefault();
        const key = e.key.trim().toUpperCase();
        if(key && key.length === 1){
            if(isActiveKey(key)){
                removeLearningKey(key);
            }else{
                setLearningKey(key);
            }
        }
    };

    useEffect(() => {
        document.addEventListener('keypress', toggleLearningKeyHandler);
        return () => {
            document.removeEventListener('keypress', toggleLearningKeyHandler);
        };
    });


    return (
        <Keyboard
            setActiveKey={setLearningKey}
            removeActiveKey={removeLearningKey}
            isActiveKey={isActiveKey}
            showGrid={settings.keys.grid}
        />
    );
};

export default connect(
    state => ({settings: state.settings}),
    {setLearningKey, removeLearningKey}
)(SettingsKeyboard);