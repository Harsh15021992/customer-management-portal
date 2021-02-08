import React from "react";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import brandLogo from "../../logo.png";

const Header = () => {
  let history = useHistory();
  const showAddLink =
    history.location.pathname === "/home" || history.location.pathname === "/"
      ? true
      : false;
  return (
    <header className="header">
      <AppBar>
        <Grid container spacing={4} justify="center">
          <Grid item xs={12} md={9}>
            <Grid container spacing={4} justify="center">
              <Grid item xs={showAddLink ? 5 : 12} sm={showAddLink ? 6 : 12}>
                <Toolbar>
                  <img
                    src={brandLogo}
                    alt="Customer Management Portal"
                    className="brand-logo"
                  />
                </Toolbar>
              </Grid>
              {showAddLink && (
                <Grid item xs={7} sm={6}>
                  <Toolbar className="add-link-container">
                    <Link to="/add" className="add-customer">
                      Add Customer
                    </Link>
                  </Toolbar>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </header>
  );
};

export default Header;
