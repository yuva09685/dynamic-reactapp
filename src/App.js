import React, { useState, useEffect } from "react";
import { Container, Box } from "@mui/material";
import ProfileForm from "./components/ProfileForm";
import ProfileList from "./components/ProfileList";
import axios from "axios";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [edit, setEdit] = useState(null);

  const fetchProfiles = async () => {
    try {
      const { data } = await axios.post("https://dynamic-app-backend.onrender.com/api/profiles/userList");
      setProfiles(data);
      setEdit(null);
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const onDelete = async (id) => {
     try{
      await axios.post("https://dynamic-app-backend.onrender.com/api/profiles/userDelete", {id:id});
      fetchProfiles();
     } catch(error){
        console.log(error);
     }
  }

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
          <ProfileForm fetchProfiles={fetchProfiles} edit={edit} setEdit={setEdit}/>
        </Box>

        {/* Scrollable Card List Section (Smaller in Width) */}
        <Box
          sx={{
            width: "55%", // Reduced width
            maxHeight: "500px",
            overflowY: "auto",
            padding: "20px",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.77)",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <ProfileList profiles={profiles} setEdit={setEdit} onDelete={onDelete}/>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
