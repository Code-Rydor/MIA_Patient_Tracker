import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import "bootswatch/dist/morph/bootstrap.min.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>MIA Patient Tracker</b>
          </Link>
        </li>
        <li><button class="btn btn-secondary my-2 my-sm-0" onClick={() => navigate("/addpatient")}>Add New Patient</button></li>
        <li><button class="btn btn-secondary my-2 my-sm-0" onClick={() => navigate("/tobecontacted")}>Make Contact</button></li>
        <li><button class="btn btn-secondary my-2 my-sm-0" onClick={() => navigate("/makeappointment")}>Make Appointment</button></li>
        <li><button class="btn btn-secondary my-2 my-sm-0" onClick={() => navigate("/schedule")}>View Schedule</button></li>
        <li>
          {user ? (
            <button class="btn btn-secondary my-2 my-sm-0" onClick={logoutUser}>Logout</button>
          ) : (
              <button class="btn btn-secondary my-2 my-sm-0" onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

