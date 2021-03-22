import {connect} from "react-redux";
import KeyChecker from "./KeyChecker";
import {pauseLesson, resumeLesson, newLesson, resetLesson} from "../redux/lesson/actions";


const Panel = ({settings, lesson, text, newLesson, resetLesson, pauseLesson, resumeLesson}) => {


    const start = (e) => {
        e.target.blur();
        newLesson();
    };

    const stop = (e) => {
        e.target.blur();
        resetLesson();
    };

    const pause = (e) => {
        e.target.blur();
        pauseLesson();
    };

    const resume = (e) => {
        e.target.blur();
        resumeLesson();
    };

    return (
        <div className="row">
            <div className="col">
                <KeyChecker />
                {lesson.running ?
                    <div className="btn-group" role="group">
                        <button onClick={pause} type="button" className="btn btn-secondary">Пауза</button>
                        <button onClick={stop} type="button" className="btn btn-danger">Стоп</button>
                    </div> :
                    lesson.startedAt ?
                        <button onClick={resume} type="button" className="btn btn-primary">Продолжить</button> :
                        <button onClick={start} type="button" className="btn btn-success">Старт</button>

                }
            </div>
            {lesson.running &&
                <div className="col">
                    {text.passed.length} / {settings.text.length}
                </div>
            }
        </div>
    );
};

export default connect(
    state => ({settings: state.settings, lesson: state.lesson, text: state.text}),
    {newLesson, resetLesson, pauseLesson, resumeLesson}
)(Panel);