import React  from 'react';
import { fade,makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

 const item=[
    {image:'/assets/images/img-9.png',
     titre:"Lame commposite"
    },
    {image:'/assets/images/img-5.png',
     titre:"Lame en bois",
    },
    {image:'/assets/images/img-3.png',
    titre:"Panneau en bois"
   },
   {image:'/assets/images/img-1.png',
   titre:"Grille rigide"
   },
   {image:'/assets/images/img-6.png',
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
  title:{
    width:" 135px",
    height: "45px",
   color: "#ffffff",
   fontFamily: "PT Sans",
   textAlign: "end",
  }
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
      <img src={show ? el.image  : "/assets/images/img-6.png"}    
      style={{height:"160",width:"200"}}
       onMouseOut={() => setshow(false)}
       onMouseOver={() =>setshow(true)} 
       />
     <div  className={classes.cardBody}  >
     <Typography   className={classes.title} variant="h5" component="h4">{el.titre}</Typography>
       </div>
       </div>
  
  
  )}
  </Grid>
  <Grid md={1}></Grid>
 </Grid> );
}