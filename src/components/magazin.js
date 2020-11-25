import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 169,
  },
  imageMagazime: {
    //  position: "absolute",
    top: "2068px",
    left: "0",
    marginLeft: "-41%",
  },
  root: {
    position: "absolute",
    top: "190px",
    left: "542px",
    width: "656px",
    height: "385px",
    border: "1px solid #e2e2e2",
    backgroundColor: "#ffffff",
    // position:"relative"
  },
  title: {
    marginTop: "13px",
    marginleft: "94px !important",
    color: "#1f1f1f",
    fontSize: "30px",
    fontWeight: "700",
  },
}));

export default function Magazin() {
  const classes = useStyles();

  return (
    <Grid container style={{ position: "relative", padding: "130px 0px" }}>
      <Grid item xs={6}>
        <img
          className={classes.imageMagazime}
          src="/assets/images/c-1.png"
          width="1000px"
          height="481px"
        />
      </Grid>
      <Grid item xs={6}>
        <Grid container>
          <Typography
            variant="h4"
            component="h4"
            className={classes.title}
            style={{ paddingLeft: "105px" }}
          >
            Notre magasin
          </Typography>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                title="Contemplative Reptile"
                className={classes.media}
                image="/assets/images/image-1.png"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Dolores et ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
