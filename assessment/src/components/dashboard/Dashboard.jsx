import React from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div className="container-fluid">
     <div className="row">
      <div className="col-2 bg-dark" style={{ height: "100vh" }}>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/login" className="nav-link text-light">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/graph-form" className="nav-link text-light">
            Graph Form
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/graph-list" className="nav-link text-light">
            Graph List
          </Link>
        </li>
      </ul>
      </div>
      <div className="col-10">
      {props.children}
      </div>
     </div>
    </div>
  );
};

export default Dashboard;
