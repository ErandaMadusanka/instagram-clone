import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../slices/globalSlice";
import { RootState } from "../../types";
import "./NavBar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  const { hamburger } = useSelector((state: RootState) => state.global);
  const location = useLocation();

  const handleSidebar = () => {
    dispatch(toggleSidebar(!hamburger));
  };

  return (
    <div id="navbar" className={`side-bar ${hamburger ? "open" : "close"}`}>
      <div className="menu-section">
        <img alt="avatar" src="./burger-menu.svg" onClick={handleSidebar} />
        <img alt="hamburger" src="./logo512.png" />
      </div>
      <hr />
      <div className="nav-menu">
        <Link to="/post" className={location.pathname === "/post" ? "selected" : ""}>
          Posts
        </Link>
        <Link to="/createpost" className={location.pathname === "/createpost" ? "selected" : ""}>
          Create Post
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
