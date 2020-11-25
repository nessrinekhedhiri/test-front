import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Login from "../components/login";
import Scrolboutique from "../components/scrolboutique";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    boxShadow: "none",
    // borderBottom: "1px solid #e2e2e2",
  },
  toolbar: {
    borderBottom: "1px solid #e2e2e2",
  },
  logo: {
    width: "412px",
    height: "70px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    position: "relative",
    color: "#c1c1c1",
    borderRadius: "0",
    width: "100%",
    borderRight: "1px solid #e2e2e2",
    borderLeft: "1px solid #e2e2e2",
    [theme.breakpoints.up("sm")]: {
      //marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#c1c1c1",
  },
  inputRoot: {
    color: "inherit",
    width: "416px",
    height: "70px",
  },
  inputInput: {
    color: "#b7b7b7",
    fontFamily: "PT Sans",
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    textAlign: "left",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  locationBtn: {
    height: "70px",
    width: "194px",
    borderRight: "1px solid #e2e2e2",
    borderRadius: 0,
    backgroundColor: "#ffffff",
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },
  configBtn: {
    width: "206px",
    height: "70px",
    backgroundColor: "#7daf3f",
    color: "#fff",
    borderRight: "1px solid #e2e2e2",
    borderRadius: 0,
    textTransform: "none",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#4d302b",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  tabs: {
    display: "flex",
    justifyContent: "center",
    borderTop: "1px solid #e2e2e2",
    boxShadow: "none",
  },
  TabsContainer: {
    "& .MuiPaper-elevation1": {
      position: "absolute !important",
      boxShadow: "none !important",
    },
  },
  tab: {
    width: "272px",
    height: "50px",
    borderRight: "1px solid #e2e2e2",
    textTransform: "none",
    color: "#1f1f1f",
    fontFamily: "PT Sans",
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textAlign: "center",
  },
  contact: {
    backgroundColor: "white",
    width: "272px",
    height: "50px",
    borderRight: "1px solid #e2e2e2",
    textTransform: "none",
    color: "#1f1f1f",
    fontFamily: "PT Sans",
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textAlign: "center",
    "&:hover": {
      backgroundColor: "#7daf3f",
    },
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [hover, sethover] = useState(false);
  const [hover2, sethover2] = useState(false);
  const [hoverContact, sethoverContact] = useState(false);
  const [hoverBoutique, sethoverBoutique] = useState(false);
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar className={classes.toolbar}>
        <div
          className={classes.logo}
          style={{ width: "412px", height: "70px" }}
        >
          <img src="/assets/images/Logo.png" alt="logo" />
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <img src="/assets/icons/Tracé_16.svg" />
          </div>
          <InputBase
            placeholder="Recherche"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <Button
          onMouseOver={() => sethover(true)}
          onMouseOut={() => sethover(false)}
          variant="contained"
          className={classes.locationBtn}
          startIcon={
            !hover ? (
              <img src="/assets/icons/Icon-Location.svg" alt="location" />
            ) : (
              <></>
            )
          }
          endIcon={
            hover ? (
              <img src="/assets/icons/Icon-Location.svg" alt="location" />
            ) : (
              <></>
            )
          }
        >
          Notre magasin
        </Button>
        <Button
          onMouseOver={() => sethover2(true)}
          onMouseOut={() => sethover2(false)}
          variant="contained"
          className={classes.configBtn}
          startIcon={
            !hover2 ? (
              <img src="/assets/icons/008-fence.svg" alt="location" />
            ) : (
              <></>
            )
          }
          endIcon={
            hover2 ? (
              <img src="/assets/icons/008-fence.svg" alt="location" />
            ) : (
              <></>
            )
          }
        >
          Configurateur
        </Button>
        <div className={classes.grow} />
      </Toolbar>
      <Grid container item justify="center" className={classes.TabsContainer}>
        <Paper square>
          <Tabs
            className={classes.tabs}
            // value={value}
            elevation={0}
            indicatorColor="primary"
            textColor="primary"
            // onChange={handleChange}
            aria-label="disabled tabs example"
            centered
          >
            <Tab
              style={{ borderLeft: "1px solid #e2e2e2" }}
              className={classes.tab}
              label="Accueil"
            />
            <Tab
              className={classes.tab}
              label="Boutique"
              style={{ backgroundColor: !hoverBoutique ? "white" : "#7daf3f" }}
              onMouseOver={() => sethoverBoutique(true)}
              onMouseOut={() => sethoverBoutique(false)}
            />

            <Tab className={classes.tab} label="Nos réalisations" />
            <Tab
              className={classes.contact}
              label="Contactez-nous"
              onClick={() => sethoverContact(!hoverContact)}
            />
          </Tabs>
          {hoverContact && (
            <div style={{ marginLeft: "78%" }}>
              <Login />
            </div>
          )}
        </Paper>
      </Grid>
      {hoverBoutique && (
        <div style={{ margin: "8% 34%", position: "absolute" }}>
          <Scrolboutique />
        </div>
      )}
    </AppBar>
  );
}
