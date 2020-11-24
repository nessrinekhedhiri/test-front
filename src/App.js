import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductsContainer from "./containers/ProductsContainer";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login/> */}
      {/* <Scrolboutique/> */}
      <Route path="/products" component={ProductsContainer} />
      <Footer />
    </div>
  );
}

export default App;
