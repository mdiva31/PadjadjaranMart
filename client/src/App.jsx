import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={user ? <Home /> :<Login/>} />
          <Route path="/products" element={user ?<ProductList />:<Login/>} />
          <Route path="/products/:category" element={user ?<ProductList />:<Login/>} />
          <Route path="/product/:id" element={user ?<Product />:<Login/>} />
          <Route path="/cart" element={user ?<Cart />:<Login/>} />
          <Route path="/success" element={user ?<Success />:<Login/>} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
        </Routes>
    </Router>
  );
};

export default App;
