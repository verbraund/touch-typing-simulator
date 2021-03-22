import {connect} from "react-redux";
import KeyChecker from "./KeyChecker";
import ControlButtons from "./ControlButtons";


const Panel = ({settings, lesson, text}) => {


    return (
        <div className="row pt-5">
            <div className="col">
                <div className="row panel justify-content-around">
                    <div className="col">
                        <KeyChecker />
                        <ControlButtons />
                    </div>
                    {lesson.running &&
                    <div className="col">
                        {text.passed.length} / {settings.text.length}
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