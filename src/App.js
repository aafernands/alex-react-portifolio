import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portifolio from "./components/pages/Portifolio";
import Footer from "./components/Footer";


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
