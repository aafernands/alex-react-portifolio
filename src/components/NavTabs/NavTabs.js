import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import "../NavTabs/NavTabs.css";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		position: "relative",
		zIndex: 2,
	},

	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	desktopBtn: {
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
		[theme.breakpoints.up("md")]: {
			display: "block",
		},
	},
	title: {
		flexGrow: 1,
	},
}));

function NavTabs() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon />
					</IconButton>

					<div className={classes.desktopBtn}>
						<Button
							size="Large"
							variant="containedPrimary"
							color="Secondary"
							href="/"
						>
							HOME
						</Button>

						<Button variant="containedPrimary" color="Secondary" href="./About">
							ABOUT
						</Button>

						<Button
							variant="containedPrimary"
							color="Secondary"
							href=".Contact"
						>
							CONTACT
						</Button>

						<Button
							variant="containedPrimary"
							color="Secondary"
							href="./Portifolio"
						>
							PORTIFOLIO
						</Button>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default NavTabs;
