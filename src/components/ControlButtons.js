import {connect} from "react-redux";
import {newLesson, pauseLesson, resetLesson, resumeLesson} from "../redux/lesson/actions";

const ControlButtons = ({lesson, newLesson, resetLesson, pauseLesson, resumeLesson}) => {


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
        <div>
            {lesson.running ?
                <div className="btn-group" role="group">
                    <button onClick={pause} type="button" className="btn btn-secondary">
                        <i className="fas fa-pause" />
                        Пауза
                    </button>
                    <button onClick={stop} type="button" className="btn btn-danger">
                        <i className="fas fa-stop" />
                        Закончить
                    </button>
                </div> :
                lesson.startedAt ?
                    <div className="btn-group" role="group">
                        <button onClick={resume} type="button" className="btn btn-primary">
                            <i className="fas fa-play" />
                            Продолжить
                        </button>
                        <button onClick={stop} type="button" className="btn btn-danger">
                            <i className="fas fa-stop" />
                            Закончить
                        </button>
                    </div> :
                    <button onClick={start} type="button" className="btn btn-success">
                        <i className="fas fa-play" />
                        Начать
                    </button>
            }
        </div>
    );
};


export default connect(
    state => ({lesson: state.lesson}),
    {newLesson, resetLesson, pauseLesson, resumeLesson}
)(ControlButtons);