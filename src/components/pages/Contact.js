import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function FormPropsTextFields() {
	const classes = useStyles();

	return (


        
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
	);
}
