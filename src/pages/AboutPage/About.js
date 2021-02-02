import React from "react";
import "../AboutPage/About.css";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import PropTypes from "prop-types";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import LinearProgressWithLabel from "./components/LinearProgressWithLabel";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		backgroundColor: "#313131be",
		color: "white",
	},
	tableDiv: {
		padding: 30,
	},
	skill: {
		width: "100%",
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
		<Container className="container">
			<div>
				<section>
					<h1 className="display-4">
						ABOUT <span id="spanTitle">ME </span>{" "}
					</h1>
					<p className="lead">
						{" "}
						I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.
					</p>
				</section>
			</div>
			<h1>Work Experience</h1>
			<div className="test">
				<TableContainer>
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
			<Divider />

			<div>
				<h1>Skils</h1>
			</div>
			<div className="test">
				<div className={classes.skill}>
					<LinearProgressWithLabel label="iOS Development" value={50} />
					<LinearProgressWithLabel label="Javascript" value={20} />
					<LinearProgressWithLabel label="HTML and CSS" value={45} />
					<LinearProgressWithLabel label="Microsoft Office" value={60} />
					<LinearProgressWithLabel label="Bootstrap" value={59} />
				</div>
			</div>
		</Container>
	);
}
