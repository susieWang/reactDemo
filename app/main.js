"use strict";
import React from "react";
import ReactDOM from "react-dom";
import AppComponent from './components/productBox.js';
import { Router, Route,hashHistory} from 'react-router';
import About from "./pages/About";
import Home from "./pages/Home";
// import createBrowserHistory from 'history/createBrowserHistory';

// const history = createBrowserHistory()


//ReactDOM.render(<AppComponent/>,document.getElementById('content'));
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Home} />
	  <Route path="/about" component={About}/>
    </Router>,
    document.getElementById('content')
);