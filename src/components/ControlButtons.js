import {connect} from "react-redux";
import {newLesson, pauseLesson, resetLesson, resumeLesson} from "../redux/lesson/actions";
import {useEffect} from "react";

const ControlButtons = ({lesson, settings,newLesson, resetLesson, pauseLesson, resumeLesson}) => {


    const start = (e) => {
        e.target.blur();
        if(settings.keys.learning.length > 0){
            newLesson();
        }
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

    const enterPressHandler = (e) => {
        e.preventDefault();

        if(e.key === 'Enter'){
            if(lesson.running){
                resetLesson();
            }else{
                if(settings.keys.learning.length > 0){
                    newLesson();
                }
            }
        }

    };

    useEffect(() => {
        document.addEventListener('keypress', enterPressHandler);
        return () => {
            document.removeEventListener('keypress', enterPressHandler);
        };
    });

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
                        Закончить <span className="badge bg-light text-danger">Enter</span>
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
                            Закончить <span className="badge bg-light text-danger">Enter</span>
                        </button>
                    </div> :
                    <button onClick={start} type="button" className="btn btn-success">
                        <i className="fas fa-play" />
                        Начать <span className="badge bg-light text-success">Enter</span>
                    </button>
            }
        </div>
    );
};


export default connect(
    state => ({lesson: state.lesson, settings: state.settings}),
    {newLesson, resetLesson, pauseLesson, resumeLesson}
)(ControlButtons);