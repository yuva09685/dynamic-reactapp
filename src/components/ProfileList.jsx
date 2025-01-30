import { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./ProfileCard";
import { Typography, CircularProgress, Box } from "@mui/material";

// Default profiles in case API fails or returns no data
const DEFAULT_PROFILES = [
  {
    id: 1,
    name: "John Doe",
    email: "yuvaraj09685@gmail.com",
    location: "New York, USA",
    bio: "Software Engineer | Tech Enthusiast",
    avatar: "https://www.gravatar.com/avatar/14f3d95d91a9e59fa303ced1fee77c46?s=200&d=identicon", // Default Gravatar avatar
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    location: "San Francisco, USA",
    bio: "Full Stack Developer | Open Source Contributor",
    avatar: "https://www.gravatar.com/avatar/?d=identicon", // Default identicon avatar
  },
];

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch profiles from API
  const fetchProfiles = async () => {
    try {
      const { data } = await axios.post("http://127.0.0.1:5000/api/profiles/userList")
      if (data.length === 0) {
        setProfiles(DEFAULT_PROFILES); // Use default profiles if API returns an empty array
      } else {
        setProfiles(data);
      }
    } catch (err) {
      console.error("Error fetching profiles:", err);
      setProfiles(DEFAULT_PROFILES); // Use default profiles if API call fails
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", marginTop: 5 }}>
        <CircularProgress />
        <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
          Loading profiles...
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      {error && (
        <Typography variant="body1" color="error" sx={{ textAlign: "center", mb: 2 }}>
          Failed to load data. Showing default profiles.
        </Typography>
      )}
      {profiles.map((user) => (
        <ProfileCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ProfileList;
