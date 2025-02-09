import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
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
          <Button
            color="inherit"
            onClick={() => {
              const docUrl = "/User Documentation (1).pdf";
              const link = document.createElement("a");
              link.href = docUrl;
              link.setAttribute("download", "User Documentation (1).pdf");
              document.body.appendChild(link);
              link.click();
              link.remove();
            }}
            sx={{
              fontWeight: "500",
              textTransform: "none",
              '&:hover': {
                background: "rgba(255, 255, 255, 0.1)",
                color: "#fff",
              },
            }}
          >
            Documentation
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;