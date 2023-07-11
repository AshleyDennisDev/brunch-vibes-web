import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navBar.scss";

export default function Header() {
  const { pathname } = useLocation();
  function ShowLinks() {
    if (pathname === "/" || pathname === "/login" || pathname === "/signup") {
      return null;
    } else {
      return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <Link className="nav-header__link" to="/party" href="#partyVibe">
            Party Vibe
          </Link>
          <Link className="nav-header__link" to="/chill" href="#chillVibe">
            Chill Vibe
          </Link>
          <Link className="nav-header__link" to="/chic" href="#chicVibe">
            Chic Vibe
          </Link>
        </Box>
      );
    }
  }

  return (
    <>
      <AppBar className="nav-header" position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography variant="h1" noWrap>
              <Link className="nav-header__title" to="/">
                Brunch Vibes
              </Link>
            </Typography>
            <ShowLinks />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
