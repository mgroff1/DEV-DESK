import React, { useState } from "react";
import NavbarContainer from "./NavbarContainer";
import { Link, useRouter } from "./../util/router.js";
import SectionButton from "./SectionButton";
import { useAuth } from "./../util/auth.js";

function Navbar(props) {
  const auth = useAuth();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div >
    <NavbarContainer id="phone" className="navbars" >
      <div id="phonenav" className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">

            </Link>
          </div>
          <div
            className={"navbar-burger burger" + (menuOpen ? " is-active" : "")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className={"navbar-menu" + (menuOpen ? " is-active" : "")}>
          <div className="navbar-end">


            {auth.user && (
              <div className="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link" to="/">
                  Home
                </Link>
                <div className="navbar-dropdown is-boxed">
                  <Link
                    className="navbar-item"
                    to="/signout"
                    onClick={e => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            )}

            {!auth.user && <div className="navbar-item" />}
          </div>
          <Link className="navbar-item" to="/signup">
            About
          </Link>
          <Link className="navbar-item" to="/signin">
            Sign in
          </Link>
          <Link className="navbar-item" to="/contact">
            Submit A Ticket
          </Link>
          <SectionButton
            parentColor={props.color}
            size="normal"
            onClick={() => {
              router.push("/signup");
            }}
          >
            Sign Up
          </SectionButton>
        </div>
      </div>

    </NavbarContainer>
    </div>
  );
}

export default Navbar;
