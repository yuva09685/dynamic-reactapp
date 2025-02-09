import { AppBar, Toolbar, Typography, Button, Box, Tooltip  } from "@mui/material";
import React from "react";

const Header = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <AppBar position="static" sx={{ background: "#37474f" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: 1 }}>
        <Typography
          variant="h5" 
          sx={{
            fontWeight: "bold",
            color: "#e0e0e0",
          }}
        >
          Home Page
        </Typography>

        <Box sx={{ display: "flex" }}>
        <Tooltip title="Way to my Frontend Repository">
          <Button
            color="inherit"
            onClick={() => openLink("https://github.com/yuva09685/dynamic-reactapp")}
            sx={{
              marginRight: 1, 
              fontWeight: "500",
              textTransform: "none",
              '&:hover': { 
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
              },
            }}
          >
            Frontend Repo
          </Button>
          </Tooltip>
          <Tooltip title="Way to my Backend Repository">
          <Button
            color="inherit"
            onClick={() => openLink("https://github.com/yuva09685/dynamic-app-backend")}
            sx={{
              marginRight: 1,
              fontWeight: "500",
              textTransform: "none",
              '&:hover': {
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
              },
            }}
          >
            Backend Repo
          </Button>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;