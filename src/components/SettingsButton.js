import {connect} from "react-redux";
import {hideSettings, showSettings} from "../redux/settings/actions";

const SettingsButton = ({settings, showSettings, hideSettings}) => {


    const toggleHandler = (e) => {
        e.target.blur();
        if(settings.display){
            hideSettings();
        }else{
            showSettings();
        }
    };

    return (
        <button onClick={toggleHandler} type="button" className="btn btn-secondary">
            <i className="fas fa-cog"/>
            Настройки
        </button>
    );
};


export default connect(
    state => ({settings: state.settings}),
    {showSettings, hideSettings}
)(SettingsButton);