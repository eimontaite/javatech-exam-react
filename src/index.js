import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import {MuiThemeProvider} from "material-ui";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const app = (
        <Router>
            <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App/>
            </MuiThemeProvider>
        </Router>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();