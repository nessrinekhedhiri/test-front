import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    "& .MuiListSubheader-root": {
      width: "258px",
      height: "70px",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  headerTitle: {
    width: "107px",
    height: "27px",
    color: "#1f1f1f",
    fontSize: "20px",
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    fontWeight: "bold",
    border: "1px solid #e2e2e2",

  },
  itemActive: {
    width: "260px",
    height: "60px",
    backgroundColor: "#7daf3f",
    "&:hover": {
      backgroundColor: "#7daf3f",
    },
  },
  itemDesactive: {
    width: "260px",
    height: "60px",
    backgroundColor: "#ffffff",
    border: "1px solid #e2e2e2",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
  },
  textItemActive: {
    width: "75px",
    height: " 23px",
    color: "#f7f7f7",
    fontSize: "17px",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    "& .MuiTypography-displayBlock": {
      textAlign: "left",
      fontWeight: "bold",
    },
  },
  textItemDesactive: {
    width: "113px",
    height: "20px",
    color: "#6f6c6c",
    fontSize: "16px",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    "& .MuiTypography-displayBlock": {
      textAlign: "left",
      fontWeight: "bold",
    },
  },
}));

export default function SideBar() {
  const classes = useStyles();

  return (
    <List
      component="nav"
      style={{ width: "258px", height: "70px" }}
      subheader={
        <ListSubheader
          className={classes.headerTitle}
          component="div"
          id="nested-list-subheader"
        >
          CATÉGORIES
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button className={classes.itemActive}>
        <ListItemText className={classes.textItemActive} primary="Lame Bois" />
        <img src="/assets/icons/Chevron_Right.svg" />
      </ListItem>
      <ListItem button className={classes.itemDesactive}>
        <ListItemText
          className={classes.textItemDesactive}
          primary="Lame Composite"
        />
        <img src="/assets/icons/Chevron_Right.svg" />
      </ListItem>
      <ListItem button className={classes.itemDesactive}>
        <ListItemText
          className={classes.textItemDesactive}
          primary="Panneau Bois"
        />
        <img src="/assets/icons/Chevron_Right.svg" />
      </ListItem>
      <ListItem button className={classes.itemDesactive}>
        <ListItemText
          className={classes.textItemDesactive}
          primary="Grille Rigide"
        />
        <img src="/assets/icons/Chevron_Right.svg" />
      </ListItem>
      <ListItem button className={classes.itemDesactive}>
        <ListItemText className={classes.textItemDesactive} primary="Gabion" />
        <img src="/assets/icons/Chevron_Right.svg" />
      </ListItem>
    </List>
  );
}
