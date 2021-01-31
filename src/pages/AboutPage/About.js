import React from "react";
import "../AboutPage/AboutPage.css";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		backgroundColor: "#313131be",
		color: "white",
	},
	tableDiv: {
		padding: 30,
	},
});

function createData(dates, work) {
	return { dates, work };
}
<div className="tableDiv"></div>;
const rows = [
	createData(
		"2010-2013	",
		"Lorem ipsum dolor quisquam minus dignissimos sit elit."
	),
	createData(
		"2013-2015",
		"Assumenda quisquam minus dignissimos cupiditate facere odit. Laborum consequuntur, cupiditate. Dolores aspernatur illo doloremque."
	),
	createData(
		"2015-2029",
		"Lorem ipsum dolor sit aliquam nihil amet! amet consectetur adipisicing elit."
	),
	createData("2020-present", "Started Coding Bootcamp at Rutgers."),
];

export default function BasicTable() {
	const classes = useStyles();

	return (
		<div className="container">
			<div className="jumbotron jumbotron-fluid ">
				<section>
					<h1 className="display-4">ABOUT <span id="spanTitle">ME </span> </h1>
					<p className="lead">
						{" "}
						I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
					</p>
				</section>
			</div>

			

			<TableContainer component={Paper}>
				<h4>Work Experience</h4>

				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Dates</TableCell>
							<TableCell align="right">Work</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row.dates}>
								<TableCell component="th" scope="row">
									{row.dates}
								</TableCell>
								<TableCell align="right">{row.work}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
