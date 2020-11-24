import React  from 'react';
import { fade,makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
      transform:" scale(1.5)",
    }
  },
  cardBody:{
    borderStyle: "ridge",
    backgroundColor:"#4d302b",
    margin:"5% 1%",
    maxWidth: "76%",
    
    '&:hover': {
      backgroundColor:"#7daf3f" ,
    },
    "&:hover > img:hover": {
        fill: "#4d302b"
      }

  },
 lorem:{
    position: "absolute",
    top: "606px",
    left: "404px",
    width: "669px",
    height:" 52px",
    color: "#ffffff",
    fontFamily: "PT Sans",
    fontSize:" 20px",
    fontWeight:"400",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textAlign:" left",
 },
  body:{
      display:"flex"
  },
title:{
position:" absolute",
top:" 553px",
left:" 404px",
width:" 334px",
height:" 44px",
color:" #ffffff",
fontFamily:" PT Sans",
fontSize:" 33px",
fontWeight:" 700",
fontStyle:" normal",
letterSpacing:" normal",
lineHeight:" normal",
textAlign:" left",
fontStyle: "normal",
letterSpacing: "norma"
},
arrow:{
position: "absolute",
top: "598px",
left: "1109px",
width: "25px",
height: "24px",
},
svgIcon2:{
    position:" absolute",
    backgroundImage: "#7daf3f",
    '&:hover': {
        fill:"#4d302b" ,
         },
},
svgIcon1:{
   marginTop: "27%",
   pointerEvents: "fill",
'&:hover': {
    fill:"#4d302b" ,
     },

}
   
  
}));

export default function Card() {
  const classes = useStyles();
  const [show, setshow] = React.useState(true);
  

  return ( 
    <Grid container direction="row" >
    <Grid md={1}></Grid>
    <Grid container md={10} className={classes.cardBody} >
         <div className={classes.svgIcon}> 
           <img  className={classes.svgIcon2} src="/assets/icons/Tracé_58.svg" />
           <img  className={classes.svgIcon1} src="/assets/icons/Tracé_59.svg" />
         </div>    
      <div className={classes.body}>
         <img src="/assets/icons/Tracé_55.svg" />
       <div className={classes.configuration}>    
      <h2 className={classes.title}>Configurez votre espace</h2>
      <p className={classes.lorem}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu.</p>
      </div>
      <img  className={classes.arrow} src="/assets/icons/arrow-left-line.svg"/>
      </div>
      
      </Grid>
      <Grid md={1}>
      </Grid>
   </Grid>
   )
}