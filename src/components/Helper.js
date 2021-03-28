import {connect} from "react-redux";
import HelperKeyboard from "./HelperKeyboard";
import {hideHelperKeyboard, showHelperKeyboard} from "../redux/lesson/actions";

const Helper = ({lesson, showHelperKeyboard, hideHelperKeyboard}) => {

    if(!lesson.running && !lesson.startedAt) return null;


    const toggleKeyboardHandler = (e) => {
        e.target.blur();
        lesson.helper.keyboard ? hideHelperKeyboard() : showHelperKeyboard();
    };

    return (
        <div className="row mt-5">
            <div className="col helper">
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-check form-switch">
                            <input
                                className="form-check-input"
                                onChange={toggleKeyboardHandler}
                                checked={lesson.helper.keyboard}
                                type="checkbox"
                                id="helperToggleKeyboardChecker"
                            />
                            <label className="form-check-label" htmlFor="helperToggleKeyboardChecker">
                                Показать клавиатуру
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {lesson.helper.keyboard && <HelperKeyboard />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({lesson: state.lesson}),
    {showHelperKeyboard, hideHelperKeyboard}
)(Helper);