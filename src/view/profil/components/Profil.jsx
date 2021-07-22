import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { IconButton } from "@material-ui/core";


const useStyles = makeStyles({
  title: {
    fontFamily: "Prompt",
    fontSize: "40px",
    color: "black",
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
    marginBottom : "100px",
    borderBottom: "3px solid",
    marginLeft : "300px", 
    marginRight : "300px"
  },
  paper: {
    width: 330,
    height: 200,
    backgroundColor: "black",
    margin: "15px",
    padding: "15px",
  },
  paper2 : {
    width: 430,
    height: 250,
    margin: "15px",
    padding: "15px",
  },
  contact: {
    color: "white",
    fontFamily: "Bebas Neue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15px",
    fontSize: "20px",
  },
  container: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent : "space-evenly"
  },
  cv: {
    margin: "15px",
    '&:hover' : {
        width : "600px"
    }
  },

  description : {
      fontFamily : 'Prompt',
      fontWeight : "200"

  }, 

  icon : {
      color : "white",
      display : "flex",
      justifyContent : "center",
      alignItems : "center", 
      '&:hover' : {
          color : "#066366"
      }
  }, 

  icons : {
    display : "flex", 
    justifyContent : "center", 
    marginBottom : "20px"
  }
});

function Profil(props) {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.title}>MON PROFIL</Typography>
      <div className={classes.container}>
        <Paper className={classes.paper} elevation={4}>
          <Typography className={classes.contact}>
            lisa.machy@hotmail.fr
          </Typography>
          <Typography className={classes.contact}>06 88 27 55 32</Typography>
          <Typography className={classes.contact}>Bordeaux</Typography>
          <div className={classes.icons}>
          <a href="https://www.linkedin.com/in/lisa-machy-46630b13b/" target='_blank' rel="noreferrer">
          <IconButton><LinkedInIcon className={classes.icon} /></IconButton>
          </a>
          <a href="https://github.com/lisaseayou" target='_blank' rel="noreferrer">
          <IconButton><GitHubIcon className={classes.icon}/></IconButton>
          </a>
          </div>
  
        </Paper>
        <div>
          <img
            src="./assets/CV.png"
            alt="CV"
            width="400"
            className={classes.cv}
          ></img>
        </div>
        <Paper className={classes.paper2}>
          <Typography className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Paper>
      </div>
    </div>
  );
}

export default Profil;
