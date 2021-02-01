import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./shared/components/NavTabs/NavTabs";
import Footer from "./shared/components/Footer/Footer";

import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact.js";
import Portifolio from "./pages/PortifolioPage/Portifolio.js";
import "./shared/style/global.css";
import DrawerComponent from "./shared/components/Footer/Footer";


function App() {
	// state for drawer
	// const [isOpen, setIsOpen] = useState(false);

	// const toggleMenu = () => {
	// 	// toggle the drawer open state
	// 	setIsOpen(!isOpen);
	// };

	return (
			<Router>
				<div>
				{/* <NavTabs onToggle={toggleMenu} /> */}
					<NavTabs />
					{/* <DrawerComponent
						isOpen={isOpen}
						onToggle={toggleMenu}
					></DrawerComponent> */}
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
