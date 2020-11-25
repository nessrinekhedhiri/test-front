import React, {useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

 import CardContent from '@material-ui/core/CardContent';
import Magazin from '../components/magazin'



const data=[
    {
    image:"/assets/images/bg-maron.png",
    titre:"Notice & Installation",
    description:"Avant de commencer, calculez la quantité de bois, de béton et de quincaillerie dont vous aurez besoin.",
    log:""
    },
    {
        image:"/assets/images/work.png",
        titre:"",
        description:"",
        logo:"/assets/icons/008-fence.svg"
    },
    {
        image:"/assets/images/f-1.png",
        titre:"",
        description:"",
        logo:"/assets/icons/008-fence.svg"
    },
    {
        image:"/assets/images/élément-15.png",
        titre:"",
        description:"",
        logo:"/assets/icons/008-fence.svg"
    },
    {
        image:"/assets/images/view.png",
        titre:"", 
        description:"",
        logo:"/assets/icons/008-fence.svg"
    },
    {
        image:"/assets/images/c.png",
        titre:"",
        logo:"/assets/icons/008-fence.svg"
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
  const [hover, sethover] = useState(false); 

  return (
  <Grid container item spacing={1}>
        <Card className={classes.root} onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)}>
        <CardContent>
          <div className={classes.FirstBloc}>
           <h2 className={classes.title}>{item.titre}</h2>
           <img src={item.logo} alt="location" style={{ display:hover?"block":"none",width:"50%",marginLeft:"40%"}}/>
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
          <Grid item container md={4}  sx={6} key={index} spacing={10}>
            <Listework item={el} />
          </Grid>
        ))}
        
         <Magazin/>
      </Grid>
  );
}
