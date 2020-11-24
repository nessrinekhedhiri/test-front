import React, { useEffect } from "react";
import * as Actions from "./../action";
import { useDispatch, useSelector } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import SettingsComponent from "../components/settingsComponent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SideBar from "../components/sideBar";
import ListProducts from "../components/ListProducts";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "100%",
    backgroundColor: "#f8f8f8",
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
  tabs: {
    '& .MuiTabs-scroller' :{
      marginLeft: '-24px'
    }
  }
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
      <Grid
        container
        spacing={5}
        justify="flex-end"
        style={{ maxWidth: "100%", marginTop: "20px" }}
      >
        <Grid item xs={2.5}>
          <SideBar />
          <SettingsComponent />
        </Grid>
        <Grid item xs={9}>
          <GroupeBtn />
          <ListProducts productsData={productsData} />
        </Grid>
      </Grid>
    </div>
  );
}

function GroupeBtn(props) {
  const classes = useStyles();
  const { item } = props;

  return (
    <div square>
      <Tabs
      className={classes.tabs}
        //value={value}
        indicatorColor="primary"
        textColor="primary"
        //onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab
          label="Nouveautés"
          style={{
            width: "93px",
            height: "22px",
            color: "#1f1f1f",
            fontSize: "15px",
            fontWeight: "700",
          }}
        />
        <Tab
          label="Populaire"
          style={{
            width: "82px",
            height: "22px",
            color: "#6f6c6c",
            fontSize: "15px",
            fontWeight: "400",
          }}
        />
        <Tab
          label="Meilleures Ventes"
          style={{
            width: "35%",
            height: "22px",
            color: "#6f6c6c",
            fontSize: "15px",
            fontWeight: "400",
          }}
        />
      </Tabs>
    </div>
  );
}
