import React, {useState, useEffect}from "react";
import ProjetCard from "./ProjetCard";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ModalProjet from "../../createProjet/components/ModalProjet";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  projets: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "40px",
    marginBottom: "50px",
    [theme.breakpoints.down("sm")]: {
      display : "block"
    }
  },
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

  containButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  ajouter: {
    fontFamily: "Bebas Neue",
  },
}));

function ProjetList() {
  const classes = useStyles();

  const [projets, setProjets] = useState([]); 

  useEffect(() => {
    axios
      .get("http://localhost:3030/projet")
      .then((response) => response.data)
      .then((data) => {
        setProjets(data);
      });
  });
  
  return (
    <div id="projets">
      <Typography className={classes.title}>MES PROJETS</Typography>
      <div className={classes.projets}>
        {projets.map((projet, index) => (
          <ProjetCard projet={projet} key={index} />
        ))}
      </div>
      <div className={classes.containButton}>
        <Typography className={classes.ajouter}>
          {" "}
          Ajouter un nouveau projet{" "}
        </Typography>
        <ModalProjet />
      </div>
 
    </div>
  );
}

export default ProjetList;
