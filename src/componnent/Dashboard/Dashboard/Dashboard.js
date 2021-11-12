import React from "react";
import useAuth from "./../../../hook/useAuth";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import MyOrders from "../MyOrders/MyOrders";
import PostReview from "./../PostReview/PostReview";
import MakeAdmin from "./../MakeAdmin/MakeAdmin";
import Pay from "./../Pay/Pay";
import ManageAllOrders from "./../ManageAllOrders/ManageAllOrders";
import AddNewProduct from "./../AddNewProduct/AddNewProduct";

const Dashboard = () => {
  const { logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-3 col-sm-12 shadow  p-5">
          {admin ? (
            <div>
              <Link
                to={`${url}/makeAdmin`}
                className="nav-link active fw-bold text-dark"
                aria-current="page"
              >
                <button className="btn btn-outline-dark w-75">
                  Make Admin
                </button>
              </Link>
              <Link
                to={`${url}/manageAllOrders`}
                className="nav-link active fw-bold text-dark"
                aria-current="page"
              >
                <button className="btn btn-outline-dark w-75">
                  All Orders
                </button>
              </Link>
              <Link
                to={`${url}/addnewproduct`}
                className="nav-link active fw-bold text-dark"
                aria-current="page"
              >
                <button className="btn btn-outline-dark w-75">
                  Add New Product
                </button>
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to={`${url}/myorder`}
                className="nav-link active fw-bold text-dark"
              >
                <button className="btn btn-outline-dark w-75"> My Order</button>
              </Link>

              <Link
                to={`${url}/review`}
                className="nav-link active fw-bold text-dark"
                aria-current="page"
              >
                <button className="btn btn-outline-dark w-75">Review</button>
              </Link>

              <Link
                to={`${url}/pay`}
                className="nav-link active fw-bold text-dark"
                aria-current="page"
              >
                <button className="btn btn-outline-dark w-75">Pay</button>
              </Link>
            </div>
          )}

          <button
            onClick={logOut}
            className="btn btn-outline-danger  mx-auto w-75"
          >
            Log Out
          </button>
        </div>
        <div className="col-md-9 col-sm-12 ">
          <Switch>
            <Route exact path={path}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/myorder`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <PostReview></PostReview>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route exact path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route exact path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route exact path={`${path}/addnewproduct`}>
              <AddNewProduct></AddNewProduct>
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
