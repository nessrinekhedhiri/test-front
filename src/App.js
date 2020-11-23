import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from './containers/Products'
function App() {
  return (
    <div className="App">
       <Navbar/>
     {/* <Login/> */}
     {/* <Scrolboutique/> */}
      {/* <Route path="/Products" component={Products} /> */}
    </div>
  );
}

export default App;
