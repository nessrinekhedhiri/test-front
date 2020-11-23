import './App.css';
import Paper from '@material-ui/core/Paper';
import Navbar from './components/navbar'
import Nav from "./components/nav"
import ListeCard from "./components/cardliste"
import { fade,makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from "./components/card"

import Scrolboutique from "./components/scrolboutique"


const useStyles = makeStyles((theme) => ({
  root: {
    // border:" 1px solid #b7b7b7 ",
    //  borderStyle:" outset",
   },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));



function App() {
  const classes = useStyles();
  return (
    <div className="App">
     
  <Grid spacing={10}>
     <ListeCard/>
     <Card/>
   </Grid >
    </div>
  );
}

export default App;
