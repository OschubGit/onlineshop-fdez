import React from "react";
import {AppBar, Box, Toolbar, IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Nav from "./Nav";
import TemporaryDrawer from "./Drawer/Drawer";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className="navbar" position="static">
        <Toolbar className="navbar_toolbar">
          <TemporaryDrawer/>
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
