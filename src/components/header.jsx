import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "#37474f" }}>
      <Toolbar>
        <Typography variant="h6">Home Page</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
