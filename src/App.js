import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";
import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfiles = async () => {
    try {
      const { data } = await axios.post("http://127.0.0.1:5000/api/profiles/userList");
      setProfiles(data);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #74ebd5, #acb6e5)", // Clean gradient background
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Container sx={{ display: "flex", justifyContent: "space-between", mt: 4, flexGrow: 1 }}>
        {/* Form Section (Slightly Wider) */}
        <Box sx={{ width: "40%", height: "fit-content" }}>
          <ProfileForm fetchProfiles={fetchProfiles} />
        </Box>

        {/* Scrollable Card List Section (Smaller in Width) */}
        <Box
          sx={{
            width: "55%", // Reduced width
            maxHeight: "500px",
            overflowY: "auto",
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <ProfileList profiles={profiles} />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
