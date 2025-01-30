import React from "react";
import { Container, Typography } from "@mui/material";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";

const App = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Profile Collection App
      </Typography>
      <ProfileForm />
      <ProfileList />
    </Container>
  );
};

export default App;
