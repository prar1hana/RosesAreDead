import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Logo from "../img/logo.png";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        
        <div className="logo">
          <Link to="/">
          <img src={Logo} alt="" />
          </Link>
        
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <div className="login_button" >
            <Link className="link" to="/login">
              Login
            </Link></div>
          )}
        </div>
        
        
        <div className="links">
          
        <div className="navbarlinks">
            <Link className="link" to="/">
              HOME
            </Link>
        </div>
        
        <div className="navbarlinks">
            <Link className="link" to="/write">
              CREATE
            </Link>
        </div>

        <div className="navbarlinks">
          <Link className="link" to="/?cat=art">
            <h6>ART & SCLUPTURE</h6>
          </Link>
        </div>

        <div className="navbarlinks">
          <Link className="link" to="/?cat=Photography">
            <h6>PHOTOGRAPHY</h6>
          </Link>
          </div>

        <div className="navbarlinks">
          <Link className="link" to="/?cat=technology">
            <h6>POETRY & WRITINGS</h6>
          </Link>
          </div>

        <div className="navbarlinks">
          <Link className="link" to="/?cat=cinema">
            <h6>CINEMA</h6>
          </Link>
          </div>
        <div className="navbarlinks">
          <Link className="link" to="/?cat=Books">
            <h6>BOOKS</h6>
          </Link>
        </div>
        
        </div>
      </div>
    </div>
  );
};
export default Navbar;
