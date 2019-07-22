import React from "react";
import ReactDom from "react-dom";
import {Route,BrowserRouter} from "react-router-dom";

import App from "./layouts/App.js";

ReactDom.render(
	<BrowserRouter>
		<Route component={App}/>
	</BrowserRouter>,
	document.querySelector("#root")
)

