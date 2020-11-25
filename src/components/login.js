import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  root: {
    maxWidth: "264px",
    top: "19px",
    left: "-56px",
    width: "268px",
  },
  media: {
    height: 100,
  },
  header: {
    marginTop: "-84px",
    marginLeft: "10%",
    position: "absolute",
    color: "white",
  },
  margin: {
    marginBottom: "20px",
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/images/img accueil-1.png"
          title="Contemplative Reptile"
        />
        <Typography variant="h5" component="h2" className={classes.header}>
          Coordonnées & Map
        </Typography>
        <CardContent>
          <p>
            Hey! Pour toute informations ou suggestions, Merci de remplir le
            formulaire suivant
          </p>
        </CardContent>
        <form className={classes.card} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Nom & Prénom"
            className={classes.margin}
          />
          <TextField
            id="standard-basic"
            label="E-mail"
            className={classes.margin}
          />
          <FormControl className={classes.margin}>
            <InputLabel style={{marginLeft:'10px'}}>   Message</InputLabel>
            <TextField id="outlined-basic" variant="outlined" />
          </FormControl>
        </form>
      </CardActionArea>
      <CardActions
        style={{
          borderTop: "solid #b7b7b7",
          backgroundColor: "#7daf3f",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button style={{ textAlign: "center", color: "aliceblue" }}>
          Contactez-nous
        </Button>
      </CardActions>
    </Card>
  );
}
