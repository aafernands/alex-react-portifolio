import React from "react";
import Logo from "./alex.png";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import "../HomePage/HomePage.css";
import Typical from "react-typical";
import Particles from "react-particles-js";

const userStyles = makeStyles((theme) => ({}));

function Home() {
	const classes = userStyles();

	return (
		<Grid container spacing={2} className={classes.grid}>
			<div>
				{/* <Grid item xs={12} md={6}>
				<Paper className={classes.paper}>
					<img src={Logo} className="imageAlex" alt="Alex" />
				</Paper>
			</Grid> */}
				<Particles
					params={{
						particles: {
							number: {
								value: 30,
							},
						},
					}}
				/>
			</div>
			<Grid item xs={12} md={6}>
				<Paper className={classes.paper}>
					<div>
						<div className="row">
							<div className="col m5 m l5">
								<p className="intro">HI THERE !</p>
								<h1 className="h1 typewriter-line">
									<Typical
										steps={[
											"I am alex fernandes",
											1500,
											"I am a web developer!",
											2300,
										]}
										loop={Infinity}
										wrapper="p"
									/>
								</h1>
								<p className="intro">
									I'm a Web Developer student based in New Jersey, United
									States. I strive to build immersive and beautiful web
									applications through carefully crafted code and user-centric
									design.
								</p>
								<div className="App">
									<Button
										startIcon={<StarIcon />}
										size="large"
										style={{ fontSize: 12, padding: 18 }}
										variant="contained"
										color="secondary"
										href="./about"
									>
										MORE ABOUT ME
									</Button>
								</div>
							</div>
						</div>
					</div>
				</Paper>
			</Grid>
		</Grid>

		// <div class="MuiToolbar-root MuiToolbar-regular jss4">

		// 	<h1>test</h1>
		// </div>
	);
}

export default Home;
