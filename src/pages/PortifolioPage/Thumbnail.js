import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

{
	/* <div className="project">
			<Link to="props.link">
				<div className="project-image">
					<img src={props.image} alt="Project Image" height="100" />
				</div>
				<div className="project-title">{props.title}</div>
				<div className="project-category">{props.category}</div>
			</Link>
		</div> */
}

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		backgroundColor: "red",
	},
	media: {
		height: 200,
	},
});
function Thumbnail(props) {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					image={props.image}
					title="Contemplative Reptile"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{props.title}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{props.category}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size="small" color="primary">
					Share
				</Button>
				<Button size="small" color="primary">
					Learn More
				</Button>
			</CardActions>
		</Card>
	);
}

export default Thumbnail;
