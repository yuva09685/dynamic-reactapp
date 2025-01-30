import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ textAlign: "center", py: 2, background: "#37474f", color: "white", mt: "auto" }}>
      <Typography variant="body2">© {new Date().getFullYear()} Profile Collection App. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
