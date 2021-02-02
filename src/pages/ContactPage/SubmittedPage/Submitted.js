import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({});

export default function Submitted() {
	const classes = useStyles();

	return (
		<Container className="container">
					<h1 className="display-4">
						THANK YOU FOR CONTACTING ME! <span id="spanTitle">ME </span>{" "}
					</h1>
					<p className="lead"> I WILL GET BACK TO YOU AS SOON AS POSSIBLE </p>
		</Container>
	);
}
