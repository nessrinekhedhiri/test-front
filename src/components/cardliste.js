import React  from 'react';
import { fade,makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import img9 from '../image/img-9.png'
import img5 from '../image/img-5.png'
import img3 from '../image/img-3.png'
import img1 from '../image/img-1.png'
import img6 from '../image/img-6.png'
import Vert from '../image/élément-6.png'


 const item=[
    {image:img1,
     titre:"Lame commposite"
    },
    {image:img3,
     titre:"Lame en bois",
    },
    {image:img6,
    titre:"Panneau en bois"
   },
   {image:img9,
   titre:"Grille rigide"
   },
   {image:img5,
  titre:"Gabion"
   },
 ]

 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card:{
    padding: theme.spacing(2),
    height:"160",
    widh:"200" ,
    backgroundRepeat: "no-repeat",
    
    "&:hover ":{
    
      // transform:" scale(1.5)",
    }
  },
  cardBody:{
    color:"aliceblue",
    marginTop:"-53%",
  },
}));

export default function ListeCard() {
  const classes = useStyles();
  const [show, setshow] = React.useState(true);
  // const handleBoxToggle = () => {
  //   setshow(!show);
  // };

  return ( 
  <Grid container direction="row" >
    <Grid md={1}></Grid>
    <Grid container md={10} noWrap >
  {item.map((el,index)=><div className={classes.card}  key={index} 
  >
      <img src={show ? el.image  : img5}    
      style={{height:"160",width:"200"}}
       onMouseOut={() => setshow(false)}
       onMouseOver={() =>setshow(true)} 
       />
     <div  className={classes.cardBody}  >
     <Typography  variant="h5" component="h4">{el.titre}</Typography>
       </div>
       </div>
  
  
  )}
  </Grid>
  <Grid md={1}></Grid>
 </Grid> );
}