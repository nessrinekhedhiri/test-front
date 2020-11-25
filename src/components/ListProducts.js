import React ,{useState}from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ProductsContainer from "../containers/ProductsContainer";


const useStyles = makeStyles({
  root: {
    width: "260px",
    height: "253px",
  },
  productName: {
    width: "223px",
    height: "53px",
    color: "#1f1f1f",
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textAlign: "left",
  },
  price: {
    width: "113px",
    height: "31px",
    color: "#b7b7b7",
    fontSize: "23px",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textAlign: "left",
    fontWeight: "700",
    // "&:hover": {
    //   color: "#4d302b",
    //   left: "0",
    //   transition:" 1s ease-in",
    // },
  },
  plusproducts: {
    height: "59px",
    backgroundColor: "#f2f2f2",
    width: "95%",
    color: "#4d302b",
    fontSize: "16px",
    fontWeight: "500",
    boxShadow: "none",
  },
  detailles:{
    display:"flex",
    justifyContent:"space-between",
    color:"#7daf3f",
  }
});

function Product(props) {
  const classes = useStyles();
  const [hover, sethover] = useState(false); 
  
  
  return (
    <Card className={classes.root}>
      <CardActionArea onMouseEnter={() => sethover(true)} onMouseLeave={() => sethover(false)} >
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.item.picture}
          title="Contemplative Reptile"
        />
        <CardContent >
          <Typography
            className={classes.productName}
            variant="body2"
            color="textSecondary"
            component="h5"
            style={{marginTop:hover ? "-15%" : "0"}}
          >
            {props.item.product_name}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            className={classes.price}
            variant="body2"
            color="textSecondary"
            component="h5"
            style={{color:hover ?   "#4d302b":"#b7b7b7"}} 
          >
            {props.item.price}
          </Typography>
          <div className={classes.detailles} >
          <Typography
            sx={{ fontWeight: "bold" }}
           
            color="#7daf3f"
            component="h2"
            style={{display:hover ? "block" : "none"}} 
          >
              Voir Plus
          </Typography>
          <img  src="/assets/images/arrow-left-line-5.png"  style={{display:hover ? "block" : "none"}} />
          </div>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default function ListProducts(props) {
  const { productsData } = props;
  const classes = useStyles();
  console.log({ productsData });
  return (
    <Grid container spacing={2}>
      {productsData.map((el) => (
        <Grid item xs={3.5} key={el.id}>
          <Product item={el} />
        </Grid>
      ))}
      <Grid item xs={11} container direction="row" justify="flex-start">
        <Button variant="contained" className={classes.plusproducts}>
          <span className={classes.titlebtn}>Afficher plus</span>
        </Button>
      </Grid>
    </Grid>
  );
}
