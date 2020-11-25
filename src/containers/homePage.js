import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListeCard from "../components/cardliste"
import Card from "../components/card"
import Realisation from "../components/realisation"
import ListeContainer from '../components/listeHome'



const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      //padding: theme.spacing(2),
    },

  // blocContainer:{
  //   margin:"11% 5% 1%"
  // }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        <Grid container item xs={12}>
          <img src="/assets/images/644f2a92d0893d909051469bf4dd3f29.png" alt="bg" width='100%' /> 
        </Grid>
      <ListeCard/>  
       <Card/>
       <Realisation/>
       <div className={classes.blocContainer}>
       <ListeContainer />
       </div>
    </div>
  );
}