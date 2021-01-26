import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

  const location = useLocation();

	return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

      <Link to="/" className={location.pathname === "/" ? "nav-item nav-link active"  : "nav-link"}>
	HOME  <span className="sr-only">(current)</span></Link>


  <Link to="/contact" className={location.pathname === "/contact" ? "nav-item nav-link active"  : "nav-link"}>
	CONTACT </Link>

  <Link to="/about" className={location.pathname === "/about" ? "nav-item nav-link active"  : "nav-link"}>
	ABOUT </Link>

  <Link to="/portifolio" className={location.pathname === "/portifolio" ? "nav-item nav-link active"  : "nav-link"}>
	PORTIFOLIO </Link>
      
  </div>
  </div>
</nav>
	);
}

export default NavTabs;
