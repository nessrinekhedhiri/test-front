import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import logo from '../image/Logo.png'
import search from "../image/Layer -1.png"

const useStyles = makeStyles((theme) => ({
  location:{
    display:"flex",
    justifyContent:"space-between",
    justifyItems:"center",
  
  
   },

}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div>
      <Grid container  className={classes.root}>
      <Grid item md={4}  >
          <img src={logo}  style={{textAlign:" center",marginTop: "2%"}}/>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item md={3}  >
        <div className={classes.search}>
            <InputBase
              placeholder="Recherche"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Recherche' }}
            />
            <img src={search} style={{marginLeft: "41%", marginTop: "3%"}}/>
             {/* <svg id="Composant_2_1" data-name="Composant 2 – 1" xmlns="http://www.w3.org/2000/svg" width="200" height="70" viewBox="0 0 416 70">
              <path id="Tracé_16" data-name="Tracé 16" d="M22.265,20.721l-3.7-3.688a8.616,8.616,0,0,0,1.838-5.33,8.7,8.7,0,1,0-8.7,8.7,8.616,8.616,0,0,0,5.33-1.838l3.688,3.7a1.092,1.092,0,1,0,1.545-1.545ZM5.176,11.7A6.527,6.527,0,1,1,11.7,18.23,6.527,6.527,0,0,1,5.176,11.7Z" transform="translate(0.263 0.263)" fill="#b7b7b7"/>
              </svg> */}
          </div>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item direction="row" >
          <Grid >
        <div className={classes.location}>
          <p >Notre magasin</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.6" height="27.592" viewBox="0 0 19.6 27.592">
                  <g id="_1814106-location-map-marker" data-name="1814106-location-map-marker" transform="translate(-15.2 -8.4)">
                    <g id="Icon-Location" transform="translate(15.2 8.4)">
                      <path id="Fill-55" d="M-207-340.008l-.525-.642c-.35-.467-9.275-10.908-9.275-17.15a9.821,9.821,0,0,1,9.8-9.8,9.859,9.859,0,0,1,9.8,9.8c0,6.242-8.925,16.742-9.275,17.15l-.525.642Zm0-26.25a8.4,8.4,0,0,0-8.4,8.4c0,4.9,6.475,13.242,8.4,15.633,1.925-2.392,8.4-10.675,8.4-15.633a8.4,8.4,0,0,0-8.4-8.4Z" transform="translate(216.8 367.6)" fill="#4d302b"/>
                      <path id="Fill-56" d="M-202.667-349.733a3.759,3.759,0,0,1-3.733-3.733,3.759,3.759,0,0,1,3.733-3.733,3.759,3.759,0,0,1,3.733,3.733,3.759,3.759,0,0,1-3.733,3.733Zm0-6.067A2.34,2.34,0,0,0-205-353.467a2.34,2.34,0,0,0,2.333,2.333,2.34,2.34,0,0,0,2.333-2.333,2.34,2.34,0,0,0-2.333-2.333Z" transform="translate(212.467 363.267)" fill="#4d302b"/>
                    </g>
                  </g>
             </svg>
          </div>
          <Divider orientation="vertical" flexItem />
          </Grid>
  
          <Grid  >
          <div className={classes.Configurateur}>
          <p >Configurateur</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="31.856" height="21.222" viewBox="0 0 31.856 21.222">
        <g id="_008-fence" data-name="008-fence" transform="translate(-2 -12.028)">
          <path id="Tracé_43" data-name="Tracé 43" d="M57,43h2.124v2.124H57Z" transform="translate(-25.799 -14.528)" fill="#fff" opacity="0.2"/>
          <path id="Tracé_44" data-name="Tracé 44" d="M57,27h2.124v2.124H57Z" transform="translate(-25.799 -7.023)" fill="#fff" opacity="0.2"/>
          <path id="Tracé_45" data-name="Tracé 45" d="M32.186,33.175h4.247V16.186L34.309,13l-2.124,3.186v4.247H29v2.124h3.186v6.371H29v2.124h3.186Z" transform="translate(-12.665 -0.456)" fill="#fff" opacity="0.2"/>
          <path id="Tracé_46" data-name="Tracé 46" d="M5.124,33.175H9.371V16.186L7.247,13,5.124,16.186v4.247H3v2.124H5.124v6.371H3v2.124H5.124Z" transform="translate(-0.469 -0.456)" fill="#fff" opacity="0.2"/>
          <g id="Groupe_20" data-name="Groupe 20" transform="translate(2 12.028)">
            <path id="Tracé_47" data-name="Tracé 47" d="M24,23h1.062V34.15H24Z" transform="translate(-12.32 -17.175)" fill="#fff"/>
            <path id="Tracé_48" data-name="Tracé 48" d="M24,46h1.062v1.062H24Z" transform="translate(-12.32 -27.963)" fill="#fff"/>
            <path id="Tracé_49" data-name="Tracé 49" d="M52,23h1.062V34.15H52Z" transform="translate(-25.453 -17.175)" fill="#fff"/>
            <path id="Tracé_50" data-name="Tracé 50" d="M52,46h1.062v1.062H52Z" transform="translate(-25.453 -27.963)" fill="#fff"/>
            <path id="Tracé_51" data-name="Tracé 51" d="M38,23h1.062V34.15H38Z" transform="translate(-18.886 -17.175)" fill="#fff"/>
            <path id="Tracé_52" data-name="Tracé 52" d="M38,46h1.062v1.062H38Z" transform="translate(-18.886 -27.963)" fill="#fff"/>
            <path id="Tracé_53" data-name="Tracé 53" d="M10,23h1.062V34.15H10Z" transform="translate(-5.753 -17.175)" fill="#fff"/>
            <path id="Tracé_54" data-name="Tracé 54" d="M10,46h1.062v1.062H10Z" transform="translate(-5.753 -27.963)" fill="#fff"/>
            <path id="Tracé_55" data-name="Tracé 55" d="M33.325,22.632a.531.531,0,0,0,.531-.531V19.977a.531.531,0,0,0-.531-.531H31.732V15.73a.534.534,0,0,0-.089-.295L29.519,12.25a.552.552,0,0,0-.883,0l-2.124,3.186a.534.534,0,0,0-.089.295v3.717H24.3V15.73a.534.534,0,0,0-.089-.295L22.086,12.25a.552.552,0,0,0-.883,0l-2.124,3.186a.534.534,0,0,0-.089.295v3.717H16.866V15.73a.534.534,0,0,0-.089-.295L14.653,12.25a.552.552,0,0,0-.883,0l-2.124,3.186a.534.534,0,0,0-.089.295v3.717H9.433V15.73a.534.534,0,0,0-.089-.295L7.22,12.25a.552.552,0,0,0-.883,0L4.213,15.435a.534.534,0,0,0-.089.295v3.717H2.531A.531.531,0,0,0,2,19.977V22.1a.531.531,0,0,0,.531.531H4.124v5.309H2.531A.531.531,0,0,0,2,28.472V30.6a.531.531,0,0,0,.531.531H4.124V32.72a.531.531,0,0,0,.531.531H8.9a.531.531,0,0,0,.531-.531V31.127h2.124V32.72a.531.531,0,0,0,.531.531h4.247a.531.531,0,0,0,.531-.531V31.127H18.99V32.72a.531.531,0,0,0,.531.531h4.247a.531.531,0,0,0,.531-.531V31.127h2.124V32.72a.531.531,0,0,0,.531.531H31.2a.531.531,0,0,0,.531-.531V31.127h1.593a.531.531,0,0,0,.531-.531V28.472a.531.531,0,0,0-.531-.531H31.732V22.632ZM3.062,21.57V20.508H4.124V21.57Zm0,8.495V29H4.124v1.062Zm5.309,2.124H5.186v-16.3L6.778,13.5l1.593,2.389Zm3.186-11.68V21.57H9.433V20.508Zm0,2.124v5.309H9.433V22.632ZM9.433,30.065V29h2.124v1.062ZM15.8,32.189H12.619v-16.3L14.211,13.5,15.8,15.889Zm3.186-11.68V21.57H16.866V20.508Zm0,2.124v5.309H16.866V22.632Zm-2.124,7.433V29H18.99v1.062Zm6.371,2.124H20.052v-16.3L21.644,13.5l1.593,2.389Zm3.186-2.124H24.3V29h2.124Zm0-2.124H24.3V22.632h2.124Zm0-6.371H24.3V20.508h2.124ZM30.67,32.189H27.485v-16.3L29.077,13.5l1.593,2.389Zm2.124-11.68V21.57H31.732V20.508Zm0,8.495v1.062H31.732V29Z" transform="translate(-2 -12.028)" fill="#fff"/>
          </g>
        </g>
</svg> </div>
           
          </Grid>
          {/* <Grid item xs={3}>
            ddededededede
          </Grid> */}
        </Grid>
      </Grid>
    </div>
  );
}
