import React from 'react';
import {connect} from "react-redux";
import Keyboard from "./Keyboard";



const HelperKeyboard = ({text}) => {


    const isActiveKey = (k) => {
        //console.log(text.current.symbol.toLowerCase(),k.toLowerCase(),text.current.symbol.toLowerCase() === k.toLowerCase());
        return text.current && text.current.symbol.toLowerCase() === k.toLowerCase();
    };

    const setLearningKey = (k) => {
        //return settings.keys.learning.includes(k);
    };

    const removeLearningKey = (k) => {
        //return settings.keys.learning.includes(k);
    };


    return (
        <Keyboard
            setActiveKey={setLearningKey}
            removeActiveKey={removeLearningKey}
            isActiveKey={isActiveKey}
            showGrid={true}
            disabledSpace={false}
        />
    );
};

export default connect(
    state => ({text: state.text}),
    {}
)(HelperKeyboard);