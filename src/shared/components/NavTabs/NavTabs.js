import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import WorkIcon from "@material-ui/icons/Work";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";

import "./NavTabs.css";

import { NavLink, withRouter } from "react-router-dom";

import { Typography, MenuList, MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	flexGrow: 1,
	// 	position: "relative",
	// 	zIndex: 2,
	// },

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

	root: {
		flexGrow: 1,
	},

	title: {
		flexGrow: 1,
	},
	drawer: {
		width: 300,
		backgroundColor: "#313131;",
	},
	fullList: {
		width: "auto",
	},
	linkColor: {
		color: "white",
	},
	iconStyle: {
		color: "white",
	},
	socialIcons: {
		textAlign: "justify",
	},
}));

function NavTabs({ onToggle }) {
	const classes = useStyles();
	const [isOpen, setIsOpen] = useState(false);
	const toggleDrawer = (open) => () => {
		setIsOpen(open);
	};

	const activeRoute = (routeName) => {
		//   return props.location.pathname === routeName ? true : false;
	};

	return (
		<div>
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						{/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton> */}

						<IconButton
							onClick={toggleDrawer(true)}
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>

						<div className={classes.desktopBtn}>
							<Button
								variant="containedPrimary"
								color="Secondary"
								component={Link}
								to="/"
							>
								HOME
							</Button>

							<Button
								variant="containedPrimary"
								color="Secondary"
								component={Link}
								to="/about"
							>
								ABOUT
							</Button>

							<Button
								variant="containedPrimary"
								color="Secondary"
								component={Link}
								to="/contact"
							>
								CONTACT
							</Button>

							<Button
								variant="containedPrimary"
								color="Secondary"
								component={Link}
								to="/portifolio"
							>
								PORTIFOLIO
							</Button>
						</div>
					</Toolbar>
				</AppBar>
			</div>

			<Drawer
				classes={{ paper: classes.drawer }}
				open={isOpen}
				onClose={toggleDrawer(false)}
			>
				<div
					className={classes.fullList}
					role="presentation"
					onClick={toggleDrawer(false)}
					onKeyDown={toggleDrawer(false)}
				>
					<MenuList>
						{/* {Routes.map((prop, key) => {
              return (
                <NavLink to={prop.path} style={{ textDecoration: 'none' }} key={key}>
                  <MenuItem selected={activeRoute(prop.path)}>
                    <ListItemText primary={prop.sidebarName} />
                  </MenuItem>
                </NavLink>
              );
            })} */}
						<List className={classes.linkColor}>
							<ListItem button component={Link} to="/">
								<ListItemIcon>
									<HomeIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"HOME"} />
							</ListItem>
							<hr></hr>
							<ListItem button component={Link} to="/about">
								<ListItemIcon>
									<PersonIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"ABOUT"} />
							</ListItem>
							<hr></hr>
							<ListItem button component={Link} to="/contact">
								<ListItemIcon>
									<PermContactCalendarIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"CONTACT"} />
							</ListItem>
							<hr></hr>
							<ListItem button component={Link} to="/portifolio">
								<ListItemIcon>
									<WorkIcon className={classes.iconStyle} />
								</ListItemIcon>
								<ListItemText primary={"PORTIFOLIO"} />
							</ListItem>
							<hr></hr>
							<div classNane={classes.socialIcons}>
								<a
									href="https://twitter.com/alexafernands/"
									className="fa fa-twitter"
								></a>
								<a
									href="https://www.linkedin.com/in/alex-fernandes-5850b535/"
									className="fa fa-linkedin"
								></a>
								<a
									href="https://www.instagram.com/aafernands/"
									className="fa fa-instagram"
								></a>
								<a
									href="https://github.com/aafernands/"
									className="fa fa-github"
								></a>
							</div>
						</List>
					</MenuList>
				</div>
			</Drawer>
		</div>
	);
}

export default NavTabs;
