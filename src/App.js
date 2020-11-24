import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductsContainer from './containers/ProductsContainer'
function App() {
  return (
    <div className="App">
       <Navbar/>
     {/* <Login/> */}
     {/* <Scrolboutique/> */}
      <Route path="/products" component={ProductsContainer} />
    </div>
  );
}

export default App;
