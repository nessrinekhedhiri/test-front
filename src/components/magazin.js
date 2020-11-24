import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'

// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    magazinContainer: {
        display:"flex" ,
        alignItems:"center,"
      },
      media: {
        height: 169,
      },
    imageMagazime:{
           position: "absolute",
            top: "2068px",
            left: "0",
            width: "800px",
            height: "356px",
    },
    root:{
        position: "absolute",
        top: "2146px",
        left: "633px",
        width: "664px",
        height: "257px",
    },
    title:{
         top: "2090px",
        left: "832px",
        width: "206px",
        height: "44px",
        color: "#1f1f1f",
        fontFamily: "PT Sans",
        fontSize: "30px",
        fontWeight: "700",
        position:"absolute",
        zIndex:"1",
      }
  
  }
 
));

export default function Magazin() {
  const classes = useStyles()

  return (<div className={classes.magazinContainer}>
           <Grid container >
            <Grid item xs={6}>
            <Typography variant="h4"  component="h4" className={classes.title}>
                Notre magasin
                    </Typography>
                <img  className={classes.imageMagazime} src="/assets/images/c-1.png"/>
            </Grid>
            <Grid item xs={4}>
                <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    title="Contemplative Reptile"
                    className={classes.media}
                    image="/assets/images/image-1.png"
                    />
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                
                    <Button size="small" color="primary">
                    Learn More
                    </Button>
                </CardActions>
                </Card>                
            </Grid>
            <Grid item xs={2}>   
            </Grid>
        </Grid>
    </div>
  );
}