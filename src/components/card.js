import React  from 'react';
import { fade,makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import img9 from '../image/img-9.png'
import img5 from '../image/img-5.png'
import img3 from '../image/img-3.png'
import img1 from '../image/img-1.png'
import img6 from '../image/img-6.png'
import Vert from '../image/élément-6.png'


 
 const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card:{
    padding: theme.spacing(2),
    height:"160",
    widh:"200" ,
    backgroundRepeat: "no-repeat",
    
    "&:hover ":{
    
      // transform:" scale(1.5)",
    }
  },
  cardBody:{
    height:"170 px",
    width:"1880 px",
    borderStyle: "ridge",
    backgroundColor:"#4d302b",
    '&:hover': {
      backgroundColor:"#7daf3f" ,
    },

  },
  svgIcon  :{
    "&:hover ":{
        fill: "#7daf3f",
        transform:" scale(1.5)",
     }
  }
  
   
  
}));

export default function Card() {
  const classes = useStyles();
  const [show, setshow] = React.useState(true);
  

  return ( 
    <Grid container direction="row" >
    <Grid md={1}></Grid>
    <Grid container md={10} className={classes.cardBody} >
        <Grid item md={3} className={classes.svgIcon}>
        <svg xmlns="http://www.w3.org/2000/svg" width="127.352" height="34.378" viewBox="0 0 127.352 34.378">
        <path id="Tracé_58" data-name="Tracé 58" d="M308.963,46.564V12.186H181.611V46.564Z" transform="translate(-181.611 -12.186)" fill="#7daf3f"/>
        </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="127.354" height="111.859" viewBox="0 0 127.354 111.859">
             <path id="Tracé_59" data-name="Tracé 59" d="M308.965,111.387H218.412s-22.638-33.776,0-45.034,90.553,0,90.553,0V33.909H181.611V145.767H308.965Z" transform="translate(-181.611 -33.909)" fill="#7daf3f"/>
     </svg>
        </Grid>
   
      <Grid item md={6} direction="column">
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
</svg> 
      <h2>Configurez votre espace</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidu.</p>
      </Grid>
      <Grid md={3}>
      <svg id="arrow-left-line" xmlns="http://www.w3.org/2000/svg" width="23.937" height="23.937" viewBox="0 0 23.937 23.937">
        <path id="Tracé_19" data-name="Tracé 19" d="M23.937,0H0V23.937H23.937Z" fill="none"/>
        <path id="Tracé_20" data-name="Tracé 20" d="M16.14,10.982H4v1.995H16.14l-5.35,5.35,1.41,1.41,7.758-7.758L12.2,4.222l-1.41,1.41Z" transform="translate(-0.011 -0.011)" fill="#fff"/>
        </svg>
      </Grid>
     

      </Grid>
      <Grid md={1}>
      </Grid>
   </Grid>
   )
}