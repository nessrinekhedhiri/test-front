import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import image from  "../image/img accueil-1.png"

const useStyles = makeStyles((theme) => ({
    card: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
        height:'13ch'
      },
    },
    root: {
        maxWidth: 345,
        
      },
      media: {
        height: 140,
      },
      header:{
        marginTop: "-84px",
        marginLeft: "10%",
        position:"absolute",
        color:"white"
      },
      margin: {
        marginTop:"-25%",
      },
  }));


export default function Login() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <Typography  variant="h5" component="h2" className={classes.header}>
             Coordonnées & Map
          </Typography>
        <CardContent>
         
          <Typography variant="body2"  component="p">
                   Hey! Pour toute informations ou suggestions,
                   Merci de remplir le formulaire suivant
          </Typography>
        </CardContent>
        <form className={classes.card} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Nom & Prénom" />
            <TextField id="standard-basic" label="E-mail" />
            <FormControl >
            <InputLabel className={classes.margin}>
               Message
             </InputLabel>
           <TextField id="outlined-basic" variant="outlined" />
           </FormControl>
        </form>
      </CardActionArea>
      <CardActions  style={{borderTop: "solid #b7b7b7"}}>
          <Button   style={{textAlign:'center', margin: "5px 25px 26px 70px"}}>
             Contactez-nous
          </Button>
      </CardActions>
      
    </Card>
  );
}