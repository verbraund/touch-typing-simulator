import {applyMiddleware, compose, createStore} from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import reducer from "../reducer";

export default createStore(
    reducer,
    compose(
        applyMiddleware(logger),
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);