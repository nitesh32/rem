import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  // NavBtn,
  // NavBtnLink,
} from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav >
        <Bars />

        <NavMenu class="hov">
          <NavLink to="/about" activeStyle>
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
