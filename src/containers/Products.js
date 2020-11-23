import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import InputBase from "@material-ui/core/InputBase";

// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     flexGrow: 1,
  //   },
  //   paper: {
  //     // padding: theme.spacing(1),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //   },
}));

export default function Products() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid>
        <Grid container item xs={12} spacing={3}>
          <img src="/assets/images/imgProducts1.png" alt="bg" />
        </Grid>
      </Grid>
    </div>
  );
}
