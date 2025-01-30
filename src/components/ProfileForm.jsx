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
    await axios.post("http://127.0.0.1:5000/api/profiles/userCreate", profile);
    fetchProfiles();
    setProfile({ name: "", email: "", bio: "", location: "" }); // Clear form fields
  };

  return (
    <Card sx={{ maxWidth: 400, padding: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Create Profile
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange} value={profile.name} required />
          <TextField fullWidth label="Email" name="email" type="email" margin="normal" onChange={handleChange} value={profile.email} required />
          <TextField fullWidth label="Location" name="location" margin="normal" onChange={handleChange} value={profile.location} required />
          <TextField fullWidth label="Bio" name="bio" multiline rows={3} margin="normal" onChange={handleChange} value={profile.bio} required />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
