import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from "./NavbarElements";
import "./nav.css"

const Navbar = () => {
  return (
    <>
      <Nav >
        <Bars class="hov"/>

        <NavMenu >
          <NavLink to="/" activeStyle>
            Govt. Jobs
          </NavLink>
          <NavLink to="/events" activeStyle>
            Competitions
          </NavLink>
          <NavLink to="/annual" activeStyle>
			  Adminstration forms
		  </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
