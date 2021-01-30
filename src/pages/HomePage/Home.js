import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Container } from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import "../HomePage/HomePage.css";
import InfoCard from "./components/infoCard/infoCard";
import Particles from "react-particles-js";

const userStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
		color: "white",
	},
	particles: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		// height: 620,
	},
	paragraph: {
		width: 500,
	},
}));

function Home() {
	const classes = userStyles();

	return (
		<div className={classes.root}>
			<Particles
				className={classes.particles}
				params={{
					particles: {
						number: {
							value: 70,
						},
					},
				}}
			>
				<h1>testing</h1>
			</Particles>
			<Box alignItems="center" justifyContent="center">
				<div className="home">
					<Grid
						container
						direction="column"
						justify="center"
						alignItems="center"
					>
						<Grid>
							<InfoCard />
						</Grid>
						<Grid>
							<p className={classes.paragraph}>
								I'm a Web Developer student based in New Jersey, United States.
								I strive to build immersive and beautiful web applications
								through carefully crafted code and user-centric design.
							</p>
						</Grid>
						<Grid>
							<Button
								startIcon={<StarIcon />}
								size="large"
								style={{ fontSize: 12, padding: 18 }}
								variant="contained"
								color="secondary"
								href="/about"
							>
								MORE ABOUT ME
							</Button>
						</Grid>
					</Grid>
				</div>
			</Box>
		</div>
	);
}

export default Home;
