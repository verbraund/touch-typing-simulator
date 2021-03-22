import {connect} from "react-redux";

const Display = ({text, lesson}) => {

    const {passed, expect, wrong} = text;
    const pause = !lesson.running && lesson.startedAt;

    const localExpect = [...expect];
    const localPassed = [...passed];
    const current = localExpect.shift();

    return (
        <div className={'input ' + (wrong ? 'error' : '') + (pause ? 'disabled' : '')}>
            <pre className="passed">
                {localPassed.reverse().join('')}
            </pre>
            <div className="expect">
                <pre className="current">
                    {current === ' ' ? '_' : current}
                </pre>
                <pre className="following">
                    {localExpect.join('')}
                </pre>
            </div>
        </div>
    );
};

export default connect(state => ({text: state.text, lesson: state.lesson}))(Display);