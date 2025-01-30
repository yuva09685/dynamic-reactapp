import { useState } from "react";
import { TextField, Button, Card, CardContent, Typography } from "@mui/material";
import axios from "axios";

const ProfileForm = ({ fetchProfiles }) => {
  const [profile, setProfile] = useState({ name: "", email: "", bio: "", location: "" });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://profile-app.onrender.com/api/profile", profile);
    fetchProfiles();
  };

  return (
    <Card sx={{ maxWidth: 500, margin: "20px auto", padding: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Create Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Email" name="email" type="email" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Location" name="location" margin="normal" onChange={handleChange} required />
          <TextField fullWidth label="Bio" name="bio" multiline rows={3} margin="normal" onChange={handleChange} required />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
