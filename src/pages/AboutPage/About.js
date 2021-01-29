import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../AboutPage/AboutPage.css";

const userStyles = makeStyles((theme) => ({


	
}));

function About() {
	const classes = userStyles();
	return (
		// <div>
		//   <div className="jumbotron jumbotron-fluid ">
		//         <section>
		//             <h1 className="display-4">ABOUT ME </h1>
		//             <p className="lead"> <i>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I
		//                         DO.</i>
		//             </p>
		//         </section>
		//     </div>
		// </div>

		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Paper className={classes.paper}>xs=12</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper className={classes.paper}>xs=6</Paper>
			</Grid>
			<Grid item xs={6}>
				<Paper className={classes.paper}>xs=6</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper className={classes.paper}>xs=3</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper className={classes.paper}>xs=3</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper className={classes.paper}>xs=3</Paper>
			</Grid>
			<Grid item xs={3}>
				<Paper className={classes.paper}>xs=3</Paper>
			</Grid>
		</Grid>

		//  <div className="row" id="box">
		//             <div className="col">
		//                 <h4>Work Experience</h4>
		//                 <table className=" highlight">
		//                     <thead>
		//                         <tr>
		//                             <th>Dates</th>
		//                             <th>Work</th>
		//                         </tr>
		//                     </thead>
		//                     <tbody>
		//                         <tr>
		//                             <td>2010-2013</td>
		//                             <td>Lorem ipsum dolor quisquam minus dignissimos sit elit. </td>
		//                         </tr>
		//                         <tr>
		//                             <td>2013-2015</td>
		//                             <td>Assumenda quisquam minus dignissimos cupiditate facere odit. Laborum
		//                                 consequuntur,
		//                                 cupiditate. Dolores aspernatur illo doloremque. </td>
		//                         </tr>
		//                         <tr>
		//                             <td>2015-2029</td>
		//                             <td>Lorem ipsum dolor sit aliquam nihil amet! amet consectetur
		//                                 adipisicing
		//                                 elit. </td>
		//                         </tr>
		//                         <tr>
		//                             <td>2020-present</td>
		//                             <td>Started Coding Bootcamp at Rutgers. </td>
		//                         </tr>
		//                     </tbody>
		//                 </table>
		//             </div>
		//         </div>
		//         <br>
		//         <div className="row " id="box">
		//             <h4>Skils</h4>
		//             <div className="col l12 m12 s12">
		//                 <div className="progress red white tooltipped" data-position="top">
		//                     <div className="determinate" style="width: 25%; animation: grow 1s;"></div>
		//                     <span className="progressBoxText">iOS Development</span>
		//                 </div>

		//                 <div className="progress red white tooltipped" data-position="top">
		//                     <div className="determinate" style="width: 50%; animation: grow 1s;"></div>
		//                     <span className="progressBoxText">Word Press</span>
		//                 </div>

		//                 <div className="progress red white tooltipped " data-position="top">
		//                     <div className="determinate" style="width: 90%; animation: grow 1s;"></div>
		//                     <span className="progressBoxText">Microsoft Office</span>
		//                 </div>

		//                 <div className="progress red white tooltipped" data-position="top">
		//                     <div className="determinate" style="width: 10%; animation: grow 1s;"></div>
		//                     <span className="progressBoxText">React</span>
		//                 </div>

		//                 <div className="progress red white tooltipped" data-position="top">
		//                     <div className="determinate" style="width: 75%; animation: grow 1s;"></div>
		//                     <span className="progressBoxText">HTML and CSS</span>
		//                 </div>

		//                 <div className="progress red white tooltipped" data-position="top">
		//                     <div className="determinate" style="width: 40%; animation: grow 1s;"></div>
		//                     <span className="progressBoxText">Java Script</span>
		//                 </div>
		//                 <br>
		//             </div>
		//         </div>
		//         <br>
		//         <div className="row" id="box">
		//             <h4>My Info</h4>
		//             <br>
		//             <div className="col-12">
		//                 <p>First Name: Alex</p>
		//                 <p>Last Name: Fernandes</p>
		//                 <p>Birthdate: 04 April 1987</p>
		//                 <p>Nationality: Brazilian</p>
		//                 <p>Experience: Entry Level</p>
		//                 <p>Address: New Jersey, US</p>
		//                 <p>Freelance: Available</p>
		//                 <p>Languages: English - Portuguese</p>
		//                 <p>Phone: 9738363080</p>
		//                 <p>Email: alexfernands@outlook.com</p>
		//                 <p>GitHub: aafernands</p>
		//                 <p>Twitter: alexafernands</p>
		//             </div>
		//         </div>
	);
}

export default About;
