import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Footer from "./components/Footer/Footer";

import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";
import Contact from "./components/ContactPage/Contact";
import Portifolio from "./components/PortifolioPage/Portifolio";

function App() {
	return (
		<Router>
			<div>
				<NavTabs />
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/contact" component={Contact} />
				<Route path="/portifolio" component={Portifolio} />
				<Route path="/footer" component={Footer} />
			</div>

			<Footer />
		</Router>
	);
}

export default App;
