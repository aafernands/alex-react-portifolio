import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs/NavTabs";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper";

import Home from "./pages/HomePage/Home";
import About from "./pages/AboutPage/About";
import Contact from "./pages/ContactPage/Contact";
import Portifolio from "./pages/PortifolioPage/Portifolio";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";


function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Wrapper>
					<NavTabs />
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route path="/portifolio" component={Portifolio} />
					<Route path="/footer" component={Footer} />
				</Wrapper>
			</ThemeProvider>
			<Footer />
		</Router>
	);
}

export default App;
