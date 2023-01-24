import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Resume from "../Resume/Resume";


function PageRouter (){
	return (
	<Router>
		<Navigation />
		<Routes>
				<Route path="/" element={<Home/>} exact/>
				<Route path="/resume" element={<Resume/>} exact/>
		</Routes>
	</Router>
	
	
	)
}
export default PageRouter
