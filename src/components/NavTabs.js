import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {

  const location = useLocation();

	return (
		
    <nav class="navbar navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" >
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">


      <li class="nav-item active">
		<Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
		HOME   <span className="sr-only">(current)</span> </Link>
	
      </li>

  



      <li class="nav-item">
        <a class="nav-link" href="#">CONTACT</a>
      </li>


      <li class="nav-item">
        <a class="nav-link" href="#">ABOUT</a>
      </li>


      <li class="nav-item">
        <a class="nav-link" href="#">PORTIFOLIO</a>
      </li>



    </ul>

  </div>
</nav>
	);
}

export default NavTabs;
