import React from "react";

import Box from "@material-ui/core/Box";

import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

function LinearProgressWithLabel(props) {
	return (
		<div>
			<label>{props.label}</label>
			<Box display="flex" alignItems="center">
				<Box width="100%" mr={1}>
					<LinearProgress variant="determinate" {...props} />
				</Box>
				<Box minWidth={35}>
					<Typography variant="body2" color="textSecondary">{`${Math.round(
						props.value
					)}%`}</Typography>
				</Box>
			</Box>
		</div>
	);
}

export default LinearProgressWithLabel;
