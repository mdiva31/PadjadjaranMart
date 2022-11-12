import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);
  return (
    <Router>
      <Switch>
          <>
          <Route exact path="/">
              {admin ?<Redirect to="/dashboard" />  : <Login /> }
              </Route>
            <Topbar />
            
            <div className="container">
              <Sidebar />
              <Route path="/dashboard">
              {admin ? <Home />  : <Login /> }
              </Route>
              <Route path="/products">
              {admin ? <ProductList /> : <Login /> }
              </Route>
              <Route path="/newproduct">
              {admin ? <NewProduct /> : <Login /> }
              </Route>
            </div>
          </>
      </Switch>
    </Router>
  );
}

export default App;
