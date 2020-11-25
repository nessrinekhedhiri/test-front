import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "309px",
    backgroundImage: "#ffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    left:"0",
  },
  line: {
    width: "1088px",
    height: "10px",
    backgroundColor: "#7daf3f",
    marginTop: "-128p",
  },
  logo2: {
    width: "260px",
    height: "28px",
  },
  primaryTitle: {
    color: "#1f1f1f",
    fontSize: "18px",
    fontStyle: "normal",
    letterSpacing: "normal",
    lineHeight: "normal",
    textAlign: "left",
    display: "flex",
    justifyContent: "flex-start",
    "& .MuiListItemText-primary": {
      fontWeight: "700",
    },
  },
  secondeTitle: {
    color: "#6f6c6c",
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: "normal",
    paddingBottom: "0px !important",
    display: "flex",
    justifyContent: "flex-start",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const data = [
    {
      id: "1",
      primary: "Lien Utiles",
      secondes: [
        "Configurateur",
        "Notre magasin",
        "Notice et installation",
        "Livraison Transport",
      ],
    },
    {
      id: "2",
      primary: "Nous contacter",
      secondes: [
        "Adress : ",
        "3 rue du champ de verger Allonnes, Pays de la Loire,France ",
        "Telephone :",
        "+33 2 43 57 00 87",
      ],
    },
    {
      id: "3",
      primary: "Horaires",
      secondes: [
        "Lundi a Vendredi ",
        "7:30 -12:00 13:30 -18:00 ",
        "Samedi ( Fermé les samedis de janvier et février) ",
        "9:00 -12:00",
      ],
    },
  ];
  return (
    <div className={classes.root}>
      <hr className={classes.line} />
      <Grid
        container
        spacing={2}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={3}>
          <img src="/assets/images/Logo.png" className={classes.logo2} />
        </Grid>
        {data.map((el) => (
          <Grid
            key={el.id}
            item
            xs={3}
            container
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <List>
              <ListItem>
                <ListItemText
                  className={classes.primaryTitle}
                  primary={el.primary}
                />
              </ListItem>
              {el.secondes.map((item) => (
                <ListItem
                  style={{
                    paddingBottom: "0px",
                  }}
                >
                  <ListItemText
                    className={classes.secondeTitle}
                    secondary={item}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
