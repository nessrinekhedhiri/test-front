import React, { useState } from "react";
import {makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    boxShadow:'none',
    borderBottom: '1px solid #e2e2e2'
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
    boxShadow:'none',
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
    boxShadow:'none',
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
}));

export default function NavBar() {
  const classes = useStyles();
  const [hover, sethover] = useState(false);
  const [hover2, sethover2] = useState(false);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
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
    </AppBar>
  );
}
