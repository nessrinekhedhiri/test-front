import React ,{useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card'


const useStyles = makeStyles((theme) => ({
    magazinContainer: {
        display:"flex" ,
        alignItems:"center,"
      },
      media: {
        height: 169,
      },
    imageMagazime:{
          //  position: "absolute",
            top: "2068px",
            left: "0",
            width: "902px",
            height: "356px",                         
            marginLeft: "-41%",
            padding: "39%",
    },
    root:{ 
        position: "absolute",
        top: "2177px",
        left: "737px",
        width: "664px",
        height: "257px",
        // position:"relative"
    },
    title:{
         top: "2136px",
         left:" 937px",
        width: "206px",
        height: "44px",
        color: "#1f1f1f",
        fontFamily: "PT Sans",
        fontSize: "30px",
        fontWeight: "700",
        position:"absolute",
        zIndex:"1",
      },
      detailles:{
        display:"flex",
        justifyContent:"space-between",
        color:"#7daf3f",
      }
  
  }
 
));

export default function Magazin() {
  const classes = useStyles()
  const [hover, sethover] = useState(false); 

  return (<div className={classes.magazinContainer}>
           <Grid container onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} >
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
                    <CardContent style={{height:"20vh"}}>
                    <Typography color="textSecondary" component="p">
                    Dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                    </Typography>
                    <div className={classes.detailles} >
                      <Typography
                        sx={{ fontWeight: "bold" }}
                      
                        color="#7daf3f"
                        component="h2"
                        style={{display:hover ? "block" : "none"}} 
                      >
                          EN SAVOIR PLUS
                      </Typography>
                      <img  src="/assets/images/arrow-left-line-5.png"  style={{display:hover ? "block" : "none"}} />
                     </div>
                    </CardContent>
                </CardActionArea>
              
                </Card>                
            </Grid>
            <Grid item xs={2}>   
            </Grid>
        </Grid>
    </div>
  );
}