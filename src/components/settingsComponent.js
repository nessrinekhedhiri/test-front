import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "260px",
    height: "478px",
    marginTop: "125%",
    backgroundImage: "linear-gradient(to right, #4d302b 0%, #653d36 100%)",
  },
  image: { display: "flex", justifyContent: "start", paddingBottom: "25px" },
  titleSettings: {
    width: "203px",
    height: "27px",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "700",
  },
  prg: {
    width: "211px",
    height: "95px",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "400",
  },
  bottombloc: {
    display: "flex",
  },
  image2: {
    marginLeft: "-20px",
    marginTop: "44px",
  },
  icon: {
    width: "27px",
    height: "26px",
    marginLeft: "89px",
    marginTop: "215px"
  },
}));

export default function SettingsComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div style={{ padding: "20px" }}>
        <div className={classes.image}>
          <img
            src="/assets/images/029-toolbox.png"
            width="53px"
            height="53px"
          />
        </div>
        <Typography
          className={classes.titleSettings}
          variant="h4"
          color="textSecondary"
        >
          Configurez votre espace
        </Typography>
        <Typography
          className={classes.prg}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidu.{" "}
        </Typography>
        <div className={classes.bottombloc}>
          <img src="/assets/images/Groupe_23.svg" className={classes.image2} />
          <span>
            <img src="/assets/icons/Tracé_20.svg" className={classes.icon} />
          </span>
        </div>
      </div>
    </div>
  );
}
