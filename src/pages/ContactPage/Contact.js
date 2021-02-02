import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "../ContactPage/Contact.css";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: "white",
		color: "white",
	},
	label: {
		textTransform: "capitalize",
	},
	input: {
		width: "100%",
		marginLeft: "auto",
		marginRight: "auto",
		paddingBottom: 0,
		marginTop: 0,
		fontWeight: 500,
		color: "white",
	},

	textField: {
		width: "90%",
		marginLeft: "auto",
		marginRight: "auto",
		paddingBottom: 0,
		marginTop: 10,
		color: "white",
		fontWeight: 500,
	},
}));

export default function Contact() {
	const classes = useStyles();

	return (
		<Container className="container">
			<div>
				<section>
					<h1 className="display-4">
						CONTACT <span id="spanTitle">ME </span>{" "}
					</h1>
					<p className="lead">
						{" "}
						LEAVE YOUR MESSAGE AND I WILL GET BACK TO YOU AS SOON AS
						POSSIBLE.git add .
					</p>
				</section>
			</div>
			<div className="test">
				<form
					id="outlined-required"
					className={classes.root}
					noValidate
					autoComplete="off"
				>
					<TextField
						className={classes.textField}
						id="outlined-required"
						label="First Name"
						variant="outlined"
						InputProps={{}}
					/>
					<TextField
						className={classes.textField}
						id="outlined-required"
						label="Last Name"
						variant="outlined"
						placeholder="Last Name"
						InputProps={{}}
					/>
					<TextField
						className={classes.textField}
						id="outlined-required outlined-textarea "
						label="Telephone"
						variant="outlined"
						InputProps={{}}
					/>

					<TextField
						className={classes.textField}
						id="outlined-textarea outlined-required"
						label="Your Email"
						variant="outlined"
						placeholder="Your Email"
						InputProps={{}}
					/>

					<TextField
						id="outlined-textarea outlined-required"
						className={classes.textField}
						label="Your Message"
						multiline
						rows={6}
						placeholder="Placeholder"
						multiline
						variant="outlined"
						InputProps={{}}
					/>
				</form>

				<br></br>

				<Button
					value="Submit"
					size="large"
					style={{ fontSize: 12, padding: 18 }}
					variant="contained"
					color="primary"
					href="/submited email"
					position="left"
				>
					SUBMIT
				</Button>

				<div class="col-12" id="contactStyle">
					<h6>Available Time</h6>
					<p>Monday - Saturday 9:00am - 8:00pm</p>
					<h6>Phone</h6>
					<p>+1 9738363080</p>
					<h6>Location</h6>
					<p>Long Branch, NJ</p>
					<h6>Email</h6>
					<p component={Link} to="mailto:alexfernands@outlook.com">
						alexfernands@outlook.com"
					</p>
				</div>
			</div>
			<br></br>
		</Container>
	);
}
