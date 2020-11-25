import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const item = [
  { image: "/assets/images/img-9.png", titre: "Lame commposite" },
  { image: "/assets/images/img-5.png", titre: "Lame en bois" },
  { image: "/assets/images/img-3.png", titre: "Panneau en bois" },
  { image: "/assets/images/img-1.png", titre: "Grille rigide" },
  { image: "/assets/images/img-6.png", titre: "Gabion" },
];

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2rem",
  },
  card: {
    padding: theme.spacing(2),
    height: "160",
    widh: "200",
    backgroundRepeat: "no-repeat",

  },
  cardBody: {
    color: "aliceblue",
    marginTop: "-53%",
  },
  title: {
    width: " 135px",
    height: "45px",
    color: "#ffffff",
    fontFamily: "PT Sans",
    textAlign: "end",
  },
}));
 function Element(props){
  const [show, setshow] = React.useState(true);
  const classes = useStyles();
   return(
    <Grid item xs={3.5}  className={classes.card}>
    <img
      src={show ? props. el.image : "/assets/images/élément-3.png"}
      style={{ backgroundColor:show? "#7daf3f":"#7daf3f"} }
      onMouseOut={() => setshow(true)}
      onMouseOver={() => setshow(false)}
    />
    <div className={classes.cardBody}>
      <Typography className={classes.title} variant="h5" component="h4">
        {props.el.titre}
      </Typography>
    </div>
  </Grid>
   )
 }

export default function ListeCard() {
  const classes = useStyles();
 
  

  return (
    <Grid
      container
      spacing={2}
      xs={12}
      justify="center"
      className={classes.root}
    >
      {item.map((el, index) => (<Element key={index}  el={el}/>
        
      ))}
    </Grid>
  );
}
