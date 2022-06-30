import React from "react";
import {AppBar, Box, Toolbar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "./Nav";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{background: "transparent"}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              flexGrow: 1,
            }}
          >
            <Nav/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
