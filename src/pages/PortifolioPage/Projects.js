import React from "react";
import Thumbnail from "./Thumbnail.js"; // Import the Thumbnail component
import password from "./Macbook02.png"; // Import the Thumbnail component
import { makeStyles } from "@material-ui/core/styles";
import "./Projects.css";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
	thumbnail: {
		marging: "20px",
		padding: "20px",
		textAlign: "center",
		background: "#313131be",
		boxShadow: "2.5px 5px 4px #000000",
		color: "white",
	},
}));

function Projects(props) {
	const classes = useStyles();

	return (
		// Render a Thumbnail component
		<div>
			<h1>Projects</h1>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<Grid container justify="center" alignItems="center" spacing={2}>
						<Grid item md={4}>
							<Thumbnail
								className={classes.thumbnail}
								link="https://aafernands.github.io/password-generator/"
								image={password}
								title="Twitter Newsfeed"
								category="Mobile App"
							/>
						</Grid>
						<Grid item md={4}>
							<Thumbnail
								link="/airbnb"
								image="https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841"
								title="Airbnb Experiences"
								category="Website"
							/>
						</Grid>
						<Grid item md={4}>
							<Thumbnail
								link="/photoshop"
								image="https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841"
								title="Photoshop Redesign"
								category="Desktop App"
							/>
						</Grid>
						<Grid item md={4}>
							<Thumbnail
								link="/photoshop"
								image="https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841"
								title="Photoshop Redesign"
								category="Desktop App"
							/>
						</Grid>
						<Grid item md={4}>
							<Thumbnail
								link="/photoshop"
								image="https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841"
								title="Photoshop Redesign"
								category="Desktop App"
							/>
						</Grid>
						<Grid item md={4}>
							<Thumbnail
								link="/photoshop"
								image="https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841"
								title="Photoshop Redesign"
								category="Desktop App"
							/>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}

export default Projects;
