import React from "react";
import "./Footer.css";

function Footer() {
	return (
		<footer>
			<h5>GET IN TOUCH</h5> <a
				href="https://twitter.com/alexafernands/"
				className="fa fa-twitter"
			> </a>
			<a
				href="https://www.linkedin.com/in/alex-fernandes-5850b535/"
				className="fa fa-linkedin"
			> </a>
			<a
				href="https://www.instagram.com/aafernands/"
				className="fa fa-instagram"
			> </a>
			<a href="https://github.com/aafernands/" className="fa fa-github"> </a>
			<p>
				<span className="credits-footer">
					© 2021 Website Designed by{" "}
					<a href="https://twitter.com/alexafernands">AlexFernandes</a>
				</span>
			</p>
		</footer>
	);
}

export default Footer;
