import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor : "black", 
  },
  foot : {
      fontFamily : "Prompt", 
      color : "white",
      display : "flex",
      alignItems : "center",
      justifyContent : "center"
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <Typography className={classes.foot} >Wild Code School - July 2021</Typography>
    </BottomNavigation>
  );
}