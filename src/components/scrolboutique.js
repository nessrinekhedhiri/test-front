
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image from  "../image/img accueil-1.png"

const useStyles = makeStyles((theme)=>({

  root: {
    maxWidth: 345,
   
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
liste:{
    margin: theme.spacing(1),
    position: "absolute",
    marginTop: '-15%',
    padding:"1% 10%",
    textAlign: 'center',
    listStyle:' none',
    marginRight: "-28%",
    color: "aliceblue",
},
button:{ 
   padding:"4% 0% 4% 33%",
   color:"aliceblue"
}
}));

export default function Scrolboutique() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
       </CardActionArea>
       <ul className={classes.liste}> 
             <li> Lame commposite</li>
             <li> Lame en bois </li>
             <li style={{background:"#4d302b",width: "267%",marginLeft: "-86%"}}> Panneau en bois</li>
             <li>Grille rigide</li>
             <li>Gabion</li>
        </ul>
      <CardActions style={{background:"#7daf3f"}}>
        <Button  className={classes.button} >
          Boutique
        </Button>
      </CardActions>
    </Card>
  );
}
