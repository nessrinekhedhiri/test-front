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
    top: "19px",
    left: "-56px",
    width: "268px",
    height: "310px",
  },
  media: {
    height: "250px",
  },

  liste: {
    width: "268px",
    height: "310px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    listStyle: " none",
    position: "absolute",
    marginTop: "-283px",
    // marginRight: "-28%",
    color: "aliceblue",
  },
  button: {
    padding: "4% 0% 4% 33%",
    color: "aliceblue",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
  },
  item: {
    width: "269px",
    height: "49px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
        <li className={classes.item}> Lame commposite</li>
        <li className={classes.item}> Lame en bois </li>
        <Link to="/products">
          <li
            className={classes.item}
            style={{ backgroundColor: "#4d302b", color: "white" }}
          >
            {" "}
            Panneau en bois
          </li>
        </Link>
        <li className={classes.item}>Grille rigide</li>
        <li className={classes.item}>Gabion</li>
      </ul>
      <CardActions style={{ background: "#7daf3f" }}>
        <Button className={classes.button}>Boutique</Button>
      </CardActions>
    </Card>
  );
}
