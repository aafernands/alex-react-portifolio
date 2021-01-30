import Logo from "./alex.png";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar, Typography } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";

import Typical from "react-typical";
import Particles from "react-particles-js";

const userStyles = makeStyles((theme) => ({
	root: {
		position: "relative",
	},
	avatar: {
		// position: "absolute",
		// bottom: "50%",
		width: theme.spacing(30),
		height: theme.spacing(30),
		margin: theme.spacing(1),
		// zIndex: 1,
	},
	title: {
		color: "white",
		// position: "absolute",
		// top: 400,
		// width: 400,
	},
	typedContainer: {
		// position: "absolute",
		// top: "50%",
		// left: "50%",
		// transform: "translate(-50%, -50%)",
		// width: "100vw",
		// textAlign: "center",
		// zIndex: 1,
	},
}));

function InfoCard() {
	const classes = userStyles();

	return (
		<div className={classes.root}>
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
					{/* <Particles
						className={classes.particles}
						params={{
							particles: {
								number: {
									value: 40,
								},
							},
						}}
					/> */}
				</container>
			</Box>
		</div>
	);
}

export default InfoCard;
