import {connect} from "react-redux";

const Helper = ({lesson}) => {

    if(!lesson.running && !lesson.startedAt) return null;


    return (
        <div className="row mt-5">
            <div className="col">
                <div>
                    helper
                </div>
            </div>
        </div>
    );
};

export default connect(state => ({lesson: state.lesson}))(Helper);