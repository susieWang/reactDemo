"use strict";
import React from "react";
import ReactDOM from "react-dom";
import AppComponent from './components/productBox.js';
import { Router, Route,IndexRoute,browserHistory} from 'react-router';
import App from "./pages/App";
import About from "./pages/About";
import Home from "./pages/Home";


//ReactDOM.render(<AppComponent/>,document.getElementById('content'));
ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
      	<IndexRoute component={Home}/>
      	<Route path="/index" component={Home}/>
	  	<Route path="/about" component={About}/>
	  </Route>
    </Router>,
    document.getElementById('content')
);