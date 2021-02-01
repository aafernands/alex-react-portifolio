import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "../ContactPage/Contact.css";


const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Contact() {
	const classes = useStyles();

	return (
		<div className="container">
			<div>
				<section>
					<h1 className="display-4">
						CONTACT <span id="spanTitle">ME </span>{" "}
					</h1>
					<p className="lead">
						{" "}
						TEXT...
					</p>
				</section>
			</div>

			<form className={classes.root} noValidate autoComplete="off">
				<div>
					<TextField
						defaultValue="First Name"
						id="outlined-required"
						label="Required"
						variant="outlined"
					/>
					<TextField
						defaultValue="Last Name"
						id="outlined-required"
						label="Required"
						variant="outlined"
						placeholder="Last Name"
					/>
				</div>

				<div>
					<TextField
						id="outlined-textarea outlined-required"
						label="Your Message"
						multiline
						rows={6}
						placeholder="Placeholder"
						multiline
						variant="outlined"
					/>
				</div>
			</form>
		</div>
	);
}
