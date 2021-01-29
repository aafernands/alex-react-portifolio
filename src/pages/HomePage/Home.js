import React from "react";
import Logo from "./alex.png";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar, Typography } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import "../HomePage/HomePage.css";
import Typical from "react-typical";
import Particles from "react-particles-js";
import zIndex from "@material-ui/core/styles/zIndex";

const userStyles = makeStyles((theme) => ({
	avatar: {
		position: "absolute",
		bottom: "50%",
		width: theme.spacing(30),
		height: theme.spacing(30),
		margin: theme.spacing(1),
		zIndex: 1,
	},
	title: {
		color: "white",
	},
	typedContainer: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: 1,
	},
	particles: {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: "100vw",
		textAlign: "center",
		zIndex: -4,
	},
}));

function Home() {
	const classes = userStyles();

	return (
		<Grid container spacing={2} className={classes.grid}>
			<Grid item xs={12}>
				<div className="home">
					<Box className={classes.typedContainer}>
						<Grid container justify="center">
							<Avatar className={classes.avatar} src={Logo} alt="Alex" />
						</Grid>

						<container maxWidth="sm">
							<Typography className={classes.title} variant="h4">
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
							</Typography>
							<Particles
								className={classes.particles}
								params={{
									particles: {
										number: {
											value: 40,
										},
									},
								}}
							/>
						</container>
					</Box>
					<Grid className="">
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
					</Grid>
				</div>
			</Grid>
		</Grid>
	);
}

export default Home;
