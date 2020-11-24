import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductsContainer from './containers/ProductsContainer'
import Home from "./containers/homePage"
 function App() {
  return (
    <div className="App">
       <Navbar/>
       <Route exact path="/" component={Home} />
      <Route path="/products" component={ProductsContainer} />
      <Footer />
    </div>
  );
}

export default App;
