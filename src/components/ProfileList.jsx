import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import ProfileCard from "./ProfileCard";
import { useSnackbar } from "./snackBarNotification";

const ProfileList = ({ profiles, setEdit, onDelete }) => {

  const [searchQuery, setSearchQuery] = useState("");
  const showSnackbar = useSnackbar(); 

  const handleDelete = async (id) => {
    await onDelete(id);
    showSnackbar("Profile deleted successfully!", "success");
  };

  const filteredProfiles = profiles.filter((profile) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      profile.name.toLowerCase().includes(lowerCaseQuery) ||
      profile.email.toLowerCase().includes(lowerCaseQuery) ||
      profile.bio.toLowerCase().includes(lowerCaseQuery) ||
      profile.location.toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, paddingX: 2 }}>
      {/* Search Input Field */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <TextField
          size="small" // Makes it compact
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{
            width: "200px", // Adjust size
            background: "white",
            borderRadius: "5px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          }}
        />
      </Box>

      {/* Profile Cards List */}
      {filteredProfiles.length > 0 ? (
        filteredProfiles.map((profile) => (
          <ProfileCard key={profile.id} user={profile} setEdit={setEdit} onDelete={handleDelete}/>
        ))
      ) : (
        <Box sx={{ textAlign: "center", padding: 2, fontSize: "18px", color: "gray" }}>
          No profiles found
        </Box>
      )}
    </Box>
  );
};

export default ProfileList;
