import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
 import CardContent from '@material-ui/core/CardContent';
import Magazin from '../components/magazin'



const data=[
    {
    image:"/assets/images/bg-maron.png",
    titre:"Notice & Installation",
    description:"Avant de commencer, calculez la quantité de bois, de béton et de quincaillerie dont vous aurez besoin.",
    },
    {
        image:"/assets/images/work.png",
        titre:"",
        description:"",
    },
    {
        image:"/assets/images/f-1.png",
        titre:"",
        description:"",
    },
    {
        image:"/assets/images/élément-15.png",
        titre:"",
        description:"",
    },
    {
        image:"/assets/images/view.png",
        titre:"", 
        description:"",
    },
    {
        image:"/assets/images/c.png",
        titre:""
    }

]

const useStyles = makeStyles({
  root: {
    width: "400px",
    height: "304px",
  },
  imageworker:{
    height: "auto"
  },
  FirstBloc:{
     position:"absolute",
     width:" 198px",
     fontFamily: "PT Sans",
     margin: "4% 3%", 
  },
  title:{
    color:"#7daf3f",
  }, 
  description:{
    color:"#ffffff",
    width: "153%",
    margin: "31px -36px",
  },
});

function Listework (props) {
  const classes = useStyles();
  const { item } = props;

  return (
  <Grid container item spacing={1}>
        <Card className={classes.root}>
        <CardContent>
          <div className={classes.FirstBloc}>
           <h2 className={classes.title}>{item.titre}</h2>
            <p className={classes.description}>{item.description}</p>
          </div>
            <CardMedia 
              className={classes.imageworker}
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={item.image}
              title="Contemplative Reptile"
            />
          </CardContent>
        </Card>
    </Grid>
  );
}

export default function ListeContainer(props) {
  return (
      <Grid  container 
      direction="row"
      justify="center"
      alignItems="center"  
      spacing={2}>
           
        {data.map((el,index) => (
          <Grid item container md={4} key={index} spacing={10}>
            <Listework item={el} />
          </Grid>
        ))}
        
         <Magazin/>
      </Grid>
  );
}
