import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./shared/components/NavTabs/NavTabs";
import Footer from "./shared/components/Footer/Footer";

import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact.js";
import Portifolio from "./pages/PortifolioPage/Portifolio.js";
import "./shared/style/global.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function App() {
	return (
		<Router>
			<Container>
				<NavTabs />
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route path="/portifolio" component={Portifolio} />
				<Route path="/footer" component={Footer} />
				<Footer />
			</Container>
		</Router>
	);
}

export default App;
