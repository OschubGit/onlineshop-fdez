import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            <nav className="nav">
              <div className="nav-menu">
                <Typography variant="h6" sx={{ minWidth: 100, mr: 3 }}>OnlineShop</Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="#" color="inherit" underline="none">
                        Home
                    </Link>
                </Typography>
                <Typography sx={{ minWidth: 100 }}>
                    <Link href="#" color="inherit" underline="none">
                        Shop
                    </Link>
                </Typography>
              </div>
              <div className="btn-login">
                <Button variant="outlined" color="inherit">
                  Login
                </Button>
              </div>
            </nav>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
