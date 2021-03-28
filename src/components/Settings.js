import {connect} from "react-redux";
import {
    decrementTextLength,
    hideKeyboardGrid,
    incrementTextLength,
    setMaxWordLength,
    showKeyboardGrid
} from "../redux/settings/actions";
import SettingsKeyboard from "./SettingsKeyboard";

const Settings = ({settings, incrementTextLength, decrementTextLength, setMaxWordLength, showKeyboardGrid, hideKeyboardGrid}) => {

    if(!settings.display) return null;


    const EASY_LEVEL = 3;
    const NORMAL_LEVEL = 6;
    const HARD_LEVEL = 11;


    const increment = (e) => {
        e.target.blur();
        incrementTextLength();
    };

    const decrement = (e) => {
        e.target.blur();
        decrementTextLength();
    };

    const setEasyLevel = (e) => {
        e.target.blur();
        setMaxWordLength(EASY_LEVEL)
    };

    const setNormalLevel = (e) => {
        e.target.blur();
        setMaxWordLength(NORMAL_LEVEL)
    };

    const setHardLevel = (e) => {
        e.target.blur();
        setMaxWordLength(HARD_LEVEL)
    };

    const isLevel = (max) => {
        return settings.text.word.max === max;
    };

    const toggleKeyboardGrid = () => (
        settings.keys.grid ? hideKeyboardGrid() : showKeyboardGrid()
    );




    return (
        <div className="row mt-4">
            <div className="col settings">
                <div className="row">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn mr-2 btn-outline-secondary" disabled>Количество символов:</button>
                            <button onClick={decrement} type="button" className="btn btn-outline-secondary">-</button>
                            <button type="button" className="btn btn-secondary" disabled>{settings.text.length}</button>
                            <button onClick={increment} type="button" className="btn btn-outline-secondary">+</button>
                        </div>
                    </div>
                    <div className="col text-center">
                        <div className="btn-group" role="group">
                            <button
                                onClick={setEasyLevel}
                                type="button"
                                className={isLevel(EASY_LEVEL) ? "btn btn-primary" : "btn btn-secondary"}
                                disabled={isLevel(EASY_LEVEL)}
                            >Легко</button>
                            <button
                                onClick={setNormalLevel}
                                type="button"
                                className={isLevel(NORMAL_LEVEL) ? "btn btn-primary" : "btn btn-secondary"}
                                disabled={isLevel(NORMAL_LEVEL)}
                            >Нормально</button>
                            <button
                                onClick={setHardLevel}
                                type="button"
                                className={isLevel(HARD_LEVEL) ? "btn btn-primary" : "btn btn-secondary"}
                                disabled={isLevel(HARD_LEVEL)}
                            >Сложно</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-check form-switch">
                            <input className="form-check-input" onChange={toggleKeyboardGrid} checked={settings.keys.grid} type="checkbox" id="settingsShowGridChecker" />
                            <label className="form-check-label" htmlFor="settingsShowGridChecker">
                                Показать сетку
                            </label>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col">
                        <SettingsKeyboard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default connect(
    state => ({settings: state.settings}),
    {incrementTextLength, decrementTextLength, setMaxWordLength, showKeyboardGrid, hideKeyboardGrid}
)(Settings);