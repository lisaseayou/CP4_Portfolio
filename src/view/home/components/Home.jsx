import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  background: {
    minWidth: "100%",
    height: "100vh",
    backgroundImage: "url('/assets/bckg.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("sm")]: {
      height : "100vh", 
      width : "100%"

    },
  },
  typo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
    justifyContent : "center",
    },
  },

  name: {
    fontSize: "100px",
    color: "white",
    fontFamily: "Prompt",
    marginTop: "60px",
    [theme.breakpoints.down("sm")]: {
      fontSize : "10px"
     },
  },

  undertitle: {
    fontSize: "40px",
    color: "white",
    fontFamily: "Prompt",
    fontWeight: "200",
    [theme.breakpoints.down("sm")]: {
      fontSize : "10px"
     },
  },

  containButton: {
    marginTop: "200px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(3),
  },

  btn: {
    backgroundColor: "white",
    fontFamily: "Prompt",
    borderRadius: "20px",
 
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.typo}>
        <Typography className={classes.name}>LISA MACHY</Typography>
        <Typography className={classes.undertitle}>
          Développeuse Web Full Stack Junior
        </Typography>
      </div>
    </div>
  );
}

export default Home;
