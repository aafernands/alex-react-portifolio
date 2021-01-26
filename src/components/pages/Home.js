import React from "react";
import Logo from "./alex.png";
import { Button } from "@material-ui/core";

function Home() {
	return (
		<div>
			<div class="row">
				<div class="col s12 m5 l6">
					<img
						src={Logo}
						class="
                        img-fluid max-width: 50%;"
						alt="Alex Fernandes picture"
					/>
				</div>
				<div class="col m5 m l5">
					<p class="hithere">HI THERE !</p>
					<h1 class="h1 typewriter-line">I am a Web Developer</h1>
					<p class="hithere">
						I'm a Web Developer student based in New Jersey, United States. I
						strive to build immersive and beautiful web applications through
						carefully crafted code and user-centric design.
					</p>

					<div className="App">
						<Button variant="contained" color="secondary" href="./about">
							MORE ABOUT ME
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}


export default Home;
