import {connect} from "react-redux";

const Display = ({text, lesson}) => {

    const {passed, current, expect, wrong} = text;
    const pause = !lesson.running && lesson.startedAt;

    const localPassed = [...passed];

    return (
        <div className="row mt-4">
            <div className="col">
                <div className={'input ' + (wrong ? 'error' : '') + (pause ? 'disabled' : '')}>
                    <pre className="passed">
                        {localPassed.reverse().map((k,i) => {
                            return <span
                                className={`${k.error && 'error'}`}
                                key={i}
                            >{k.error ? k.symbol.replace(' ', '_') : k.symbol}</span>
                        })}
                    </pre>
                    <div className="expect">
                        <pre className="current">
                            {current && current.symbol.replace(' ', '_')}
                        </pre>
                        <pre className="following">
                            {expect.map(k => (k.symbol)).join('')}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(state => ({text: state.text, lesson: state.lesson}))(Display);