import {connect} from "react-redux";
import KeyChecker from "./KeyChecker";
import ControlButtons from "./ControlButtons";


const Panel = ({settings, lesson, text}) => {

    const round = (n) => {
        //return (Number(n) === n && n % 1 !== 0) ? n.toFixed(2) : n;я
        return Math.floor(n);
    };

    const progress = round(100 * (text.passed.length - text.errors.length) / settings.text.length);
    const errorProgress = round(100 * text.errors.length / settings.text.length);



    return (
        <div className="row pt-4">
            <div className="col">
                <div className="row panel justify-content-around">
                    <div className="col">
                        <KeyChecker />
                        <ControlButtons />
                    </div>
                    {lesson.running &&
                        <div className="col text-center">
                            {text.passed.length} / {settings.text.length}
                        </div>
                    }
                    {lesson.running &&
                        <div className="col">
                            <div className="progress">
                                <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    style={{width: `${errorProgress}%`}}
                                    aria-valuenow={errorProgress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >{errorProgress}%</div>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{width: `${progress}%`}}
                                    aria-valuenow={progress}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                >{progress}%</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({settings: state.settings, lesson: state.lesson, text: state.text})
)(Panel);