import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./componnent/Shared/Header/Header";
import Home from "./componnent/Home/Home/Home";
import Footer from "./componnent/Shared/Footer/Footer";
import AuthProvider from "./Context/AuthProvider";
import Login from "./componnent/Login/Login";
import Purches from "./componnent/Purches/Purches";
import PrivateRoute from "./componnent/Login/PrivateRoute/PrivateRoute";

import Products from "./componnent/Products/Products";
import Dashboard from "./componnent/Dashboard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/allproducts">
              <Products></Products>
            </Route>
            <PrivateRoute exact path="/purches/:id">
              <Purches></Purches>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
