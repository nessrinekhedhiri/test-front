import React from "react";
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
  },
});

function Product(props) {
  const classes = useStyles();
  const { item } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={item.picture}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.productName}
            variant="body2"
            color="textSecondary"
            component="h5"
          >
            {item.product_name}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold" }}
            className={classes.price}
            variant="body2"
            color="textSecondary"
            component="h5"
          >
            {item.price}
          </Typography>
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
  console.log({ productsData });
  return (
      <Grid container spacing={2}>
        {productsData.map((el) => (
          <Grid item xs={3.5} key={el.id}>
            <Product item={el} />
          </Grid>
        ))}
      </Grid>
  );
}
