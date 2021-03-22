import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";
import {Provider} from "react-redux";
import './style/index.css';
import Application from "./components/Application";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <Application />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
