import React from "react";
import "../PortifolioPage/Portifolio.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(16),
			height: theme.spacing(16),
		},
	},
}));

export default function Portifolio() {
	const classes = useStyles();

	return (
		<div className="container">
			<h1 className="display-4">PORTIFOLIO</h1>
			<p className="lead">
				{" "}
				<i>HERE YOU CAN HAVE A GLIMPSE OF MY WORK </i>
			</p>
			<div className={classes.root}>
				<Paper>
					<h1>T</h1>
				</Paper>
				<Paper>
					<h1>T</h1>
				</Paper>
				<Paper>
					<h1>T</h1>
				</Paper>
			</div>
		</div>
	);
}
