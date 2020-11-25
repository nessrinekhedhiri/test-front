import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { Link } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: '19px',
    left: '-56px',
    width: "268px",
    height: "229px",
  },
  media: {
    height: 170,
  },
  //   liste: {
  //     '& > *': {
  //       margin: theme.spacing(1),
  //       width: '25ch',
  //       height:'4ch',
  //       marginTop:"-12px"
  //     }
  // }
  liste: {
    width: "223px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    listStyle: " none",
    position: 'absolute',
    marginTop: '-150px',
    // marginRight: "-28%",
    color: "aliceblue",
  },
  button: {
    padding: "4% 0% 4% 33%",
    color: "aliceblue",
  },
}));

export default function Scrolboutique() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/assets/images/img accueil-1.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <ul className={classes.liste}>
        <li> Lame commposite</li>
        <li> Lame en bois </li>
        <Link to="/products">
          <li> Panneau en bois</li>
        </Link>
        <li>Grille rigide</li>
        <li>Gabion</li>
      </ul>
      <CardActions style={{ background: "#7daf3f" }}>
        <Button className={classes.button}>Boutique</Button>
      </CardActions>
    </Card>
  );
}
