import React  from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  imgRealisation:{
    left: "141px",
    width:" 970px",
    height: "465px",
    postion:"relative !important",
    marginLeft: "23%;",
    marginTop: "-4%",
    zIndex: "-1000",
  },
  title:{
position:" absolute",
top: "837px",
left: "91px",
width: "226px",
height: "44px",
color:" #1f1f1f",
fontFamily: "PT Sans",
fontSize: "33px",
fontWeight: "700",
fontStyle: "normal",
letterSpacing: "normal",
lineHeight: "normal",
textAlign: "left",
fontStyle: "normal",
letterSpacing: "normal",
lineHight: "normal",

  },
  description:{
position: "absolute",
top: "984px",
left: "47px",
width: "450px",
height: "189px",
color: "#504e4e",
fontFamily: "PT Sans",
fontSize: "14px",
fontWeight: "400",
fontStyle: "normal",
letterSpacing: "normal",
lineHeight: "25px",
textAlign: "left",
fontStyle: "normal",
letterSpacing: "normal",
lineHeight: "normal",
"&:hover": {
    color: "#ffffff",
  },

  },
  soutitre:{
position:"absolute",
top: "908px",
left: "124px",
width: "359px",
height: "189px",
fontFamily: "PT Sans",
fontSize: "22px",
fontWeight: "400",
fontStyle: "normal",  
  },
  body:{
    // position: "absolute",
    // top: "109px",
    left: "109px",
    width: "137px",
    height: "202px",
    border:" 1px solid #e2e2e2",
    backgroundColor: "#ffffff",
    position: "relative",
    marginTop: "88%",
    zIndex: -"1",
    "&:hover": {
        backgroundColor:"#7daf3f",       
       
      },

  } ,
  Rectangle:{
    margin: "-75px -93px 25px 173px",
},
iconNext:{

}

}));

export default function Realisation() {
  const classes = useStyles();
  const [show, setshow] = React.useState(true);
  

  return ( 
    <Grid container direction="row" >
    
    <Grid md={2} className={classes.cardBody} >
         <Typography variant="h2" className={classes.title}>Nos realistaion</Typography>
         <Typography  className={classes.soutitre}>Panneau bois</Typography>

         <Typography className={classes.description}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
             tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
              et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
               magna aliquyam erat, sed diam voluptua. 
             At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasdundefined</Typography>
      <div className={classes.body}>
      </div>
      <img  style={{position:"absolute",margin:"-6% 11%" ,zIndex:"-10"}} src="/assets/images/tracé_24.png" /> 
    
      <img  className={classes.arrow} src="/assets/icons/arrow-left-line.svg"/>
      
      </Grid>
      <Grid md={6}>
          
          <img className={classes.imgRealisation} src="/assets/images/realisation.png"/>
          <div className={classes.iconNext}>
              <div style={{display:"flex",justifyContent:'space-between' ,width:"7%",margin:"-56px 178px", position:'absolute'}}>
              <img  src="/assets/icons/tracé_20.svg"/>
              <img  src="/assets/icons/tracé_20 (1).svg"/>
              </div>
        
          <img  className={classes.Rectangle} src="/assets/images/Rectangle_20.png"/>
          </div>
   
      </Grid>
      <Grid md={1}>

      </Grid>
   </Grid>
   )
}