import React from 'react';
import { fade,makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import InputBase from '@material-ui/core/InputBase';

// import SearchIcon from '@material-ui/icons/Search';
import logo from '../image/Logo.png'
import layer from '../image/Layer -1.png'

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

export default function Navbar() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <img src={logo} />
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
             <img src={layer}/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid >
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      
      </Grid>
    </div>
  );
}
