import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from "./NavbarElements";
import "./nav.css";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
            Govt. Jobs
          </NavLink>
          <NavLink to="/events" activeStyle>
            Competative coding contests
          </NavLink>
          <NavLink to="/annual" activeStyle>
            Admission forms
          </NavLink>
          {/* <NavLink to="/blogs" activeStyle>
            Contact us
          </NavLink> */}
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
