import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "../NavTabs/NavTabs.css";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}





// import { Button } from '@material-ui/core';



// const styles = {
//   LinkStyle: {
  
//     background: "#3f51b5",
//     minHeight: 50,
//     lineHeight: 3.5,
//     fontSize: "1.2rem",
//     color: "white",
//       textDecoration: "none",
//       padding: "20px",
//       margin: "5px"
    
//   },
  
// };

// function NavTabs() {

//   const location = useLocation();

// 	return (
    
//     <nav>

//     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div className="navbar-nav">

//       <Link  style={styles.LinkStyle} to="/" className={location.pathname === "/" }>
// 	HOME </Link>

  
//   <Link style={styles.LinkStyle} to="/contact" className={location.pathname === "/contact" ? "nav-item nav-link active"  : "nav-link"}>
// 	CONTACT </Link>

//   <Link style={styles.LinkStyle} to="/about" className={location.pathname === "/about" ? "nav-item nav-link active"  : "nav-link"}>
// 	ABOUT </Link>

//   <Link style={styles.LinkStyle} to="/portifolio" className={location.pathname === "/portifolio" ? "nav-item nav-link active"  : "nav-link"}>
// 	PORTIFOLIO </Link>
       
//   </div>


//   </div>



// </nav>
// 	);
// }

// export default NavTabs;
