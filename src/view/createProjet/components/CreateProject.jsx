import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  ok: {
    fontFamily: "Prompt",
    fontWeight: 400,
    fontSize: "20px",
    backgroundColor : "black"
  },
 
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    color : "black"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    width: "40%",
    backgroundColor: "black",
    fontFamily: "Prompt",
    fontWeight: 400,
    fontSize: "20px",
    "&:hover": {
      background: "white",
         color : "black"
    },
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(0, 0, 2),
      width: "100%",
    },
  },
  contact: {
    margin: "20px",
    color: "black",
    textAlign: "center",
    fontWeight: 500,
    fontSize: "30px",
    fontFamily : "Prompt"
    // borderBottom: "1px solid",
    // paddingBottom: "20px",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    
  },
  hr: {
    width: "50%",
    marginTop: "8%",
    marginBottom: "10%",
  },
  alert: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "15px",
    marginTop: "20px",
  },
}));

export default function CreateProject() {
  const classes = useStyles();

  const [form, setForm] = React.useState({
    title: "",
    description: "",
    image: "",
    year: "",
    techno: "", 
  });

  const createProjet = () => {
    axios.post('http://localhost:3030/projet', form)};

  const handleTextFieldChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    createProjet(); 
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <CssBaseline />
      <div>
        <Typography className={classes.contact}>
          <strong>CREER UN NOUVEAU PROJET</strong>
        </Typography>
        <hr className={classes.hr}></hr>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                autoComplete="title"
                name={"title"}
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Titre"
                autoFocus
                onChange={handleTextFieldChange}
                value={form.title}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="year"
                label="year"
                name={"year"}
                autoComplete="year"
                onChange={handleTextFieldChange}
                value={form.year}
                rows={4}
                rowsMax={7}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                variant="outlined"
                required
                fullWidth
                id="description"
                label="description"
                name={"description"}
                autoComplete="description"
                onChange={handleTextFieldChange}
                value={form.description}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                id="outlined-textarea"
                required
                label="Technologies"
                multiline
                variant="outlined"
                onChange={handleTextFieldChange}
                value={form.techno}
                name={"techno"}
               
              />
            </Grid>
          </Grid>
          <div className={classes.button}>
            <Button
              type="submit"
              
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              CREER
            </Button>
          </div>
         
        </form>
      </div>
    </Container>
  );
}
