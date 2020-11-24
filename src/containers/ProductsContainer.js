import React, { useEffect } from "react";
import * as Actions from "./../action";
import { useDispatch, useSelector } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SideBar from "../components/sideBar";
import ListProducts from "../components/ListProducts";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
  },
  img: {
    marginTop: "70px",
    position: "relative",
    backgroundColor: "#60141c",
  },
  titleProduit: {
    position: "absolute",
    top: "65px",
    left: "139px",
    width: "50%",
    left: "138px",
    color: "#7daf3f",
    fontSize: "47px",
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textAlign: "left",
  },
  subtitile: {
    width: "128px",
    height: "20px",
    opacity: 0.5,
    color: "#ffffff",
    fontFamily: "PT Sans",
    fontSize: "16px",
    fontWeight: 400,
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textAlign: "center",
    left: "139px",
    position: "absolute",
    top: "128px",
  },
}));

export default function ProductsContainer(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productsData = useSelector(
    ({ ProductsReducer }) => ProductsReducer.ListProducts
  );

  useEffect(() => {
    dispatch(Actions.getProduct());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} className={classes.img}>
          <img
            src="/assets/images/imgProducts1.png"
            width="100%"
            height="170px"
            alt="bg"
          />
          <Typography className={classes.titleProduit} variant="h1">
            Nos Produits
          </Typography>
          <Typography variant="body2" className={classes.subtitile}>
            Accueil > Boutique
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={4} justify="center" style={{ maxWidth: "100%" }}>
        <Grid item xs={2.5}>
          <SideBar />
        </Grid>
        <Grid item xs={9}>
          <ListProducts productsData={productsData} />
        </Grid>
      </Grid>
    </div>
  );
}
