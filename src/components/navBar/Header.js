import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {

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

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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


            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
