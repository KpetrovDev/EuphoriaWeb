import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Carta from './Carta';
import Home from './App';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/Carta" exact component={Carta}/>
            <Route path="/Home" exact component={Home}/>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
