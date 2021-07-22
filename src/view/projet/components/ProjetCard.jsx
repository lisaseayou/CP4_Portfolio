import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CancelIcon from "@material-ui/icons/Cancel";
import { IconButton } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 330,
    [theme.breakpoints.down("sm")]: {
      width: 200,
    },
  },
  media: {
    height: 140,
  },
  title: {
    fontFamily: "Prompt",
  },
  description: {
    fontFamily: "Prompt",
    fontWeight: "200",
  },
  year: {
    fontFamily: "Bebas Neue",
  },
  techno: {
    fontFamily: "Bebas Neue",
  },
  supprimer: {
    color: "black",
    display: "flex",
    marginLeft: "250px",
  },
}));

export default function ProjetCard({ projet }) {
  const classes = useStyles();

  const deleteProjet = (id) => {
    axios.delete(`http://localhost:3030/projet/${id}`);
  };

  const handleClickDelete = (e) => {
    e.preventDefault();
    deleteProjet();
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image="/assets/img.png" />

        <CardContent>
          <Typography className={classes.title} gutterBottom component="h2">
            {projet.title}
          </Typography>
          <Typography
            className={classes.description}
            gutterBottom
            component="p"
          >
            {projet.description}
          </Typography>
          <Typography className={classes.year} component="p">
            {projet.year}
          </Typography>
          <Typography className={classes.techno} component="p">
            {projet.techno}
          </Typography>
          <IconButton className={classes.supprimer} onClick={handleClickDelete}>
            <CancelIcon />
          </IconButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
