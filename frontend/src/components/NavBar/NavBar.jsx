import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "green" }}>
            <b>MIA Patient Tracker</b>
          </Link>
        </li>
        <li><button onClick={() => navigate("/tobecontacted")}>Make Contact</button></li>
        <li><button onClick={() => navigate("/makeappointment")}>Make Appointment</button></li>
        <li><button onClick={() => navigate("/schedule")}>Schedule</button></li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
              <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

