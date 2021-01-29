import React from "react";
import Logo from "./alex.png";
import { Button, Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import StarIcon from "@material-ui/icons/Star";
import "../InfoCard/InfoCard.css";
import Typical from "react-typical";
import Particles from "react-particles-js";
import zIndex from "@material-ui/core/styles/zIndex";

const userStyles = makeStyles((theme) => ({
	avatar: {
		width: theme.spacing(30),
		height: theme.spacing(30),
		margin: theme.spacing(1),
	},
	title: {
		color: "tomato",
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
		zIndex: -1,
	},
}));

function InfoCard() {
	const classes = userStyles();

	return (
		<div>
			<Box className={classes.typedContainer}>
				<Grid container justify="center">
					<Avatar className={classes.avatar} src={Logo} alt="Alex" />
				</Grid>
				<Typography className={classes.title} variant="h4">
					<Typical
						steps={["I am alex fernandes", 1500, "I am a web developer!", 2300]}
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
			</Box>
		</div>
	);
}
export default InfoCard;
