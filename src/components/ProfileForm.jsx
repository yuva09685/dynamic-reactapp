import { useEffect, useState } from "react";
import { TextField, Button, Card, CardContent, Typography, FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";
import axios from "axios";
import { useSnackbar } from "./snackBarNotification";

const ProfileForm = ({ fetchProfiles, edit, setEdit }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
    location: ""
  });

  const showSnackbar = useSnackbar();

  const [emailError, setEmailError] = useState("");
  const [bioError, setBioError] = useState("");


  useEffect(() => {
    if (edit) {
      setProfile({
        name: edit?.name || "",
        email: edit?.email || "",
        bio: edit?.bio || "",
        location: edit?.location || ""
      })
    }
  }, [edit])

  const validateEmailConcise = (email) => {
    const regex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
    if (e.target.name === "email") {
      setEmailError(validateEmailConcise(e.target.value) ? "" : "Invalid email");
    }
    if (e.target.name === "bio") {
      const wordCount = e.target.value.split(/\s+/).length;
      setBioError(wordCount <= 10 ? "" : "Bio exceeds 10 words");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (bioError) { // Prevent submit if bio error exists
      return;
    }

    if (edit) {
      await axios.post("https://dynamic-app-backend.onrender.com/api/profiles/userUpdate", { ...profile, id: edit?.id });
      showSnackbar("Profile updated successfully!", "success");
    } else {
      await axios.post("https://dynamic-app-backend.onrender.com/api/profiles/userCreate", profile);
      showSnackbar("Profile created successfully!", "success");
    }
    fetchProfiles();
    setProfile({ name: "", email: "", bio: "", location: "" }); // Clear form fields
  };

  const handleCancel = () => {
    setProfile({ name: "", email: "", bio: "", location: "" });
    setEdit(null); // Now you can use setEdit here!
  };

  const cities = [ // Array of Indian cities (you can expand this)
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Ahmedabad", "Pune", "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", // ... add more cities
  ];

  return (
    <Card sx={{ maxWidth: 400, padding: 2, background: "rgba(255, 255, 255, 0.77)", }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {edit ? 'Update User' : 'Create User'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField fullWidth label="Name" name="name" margin="normal" onChange={handleChange} value={profile.name} required />
          <TextField fullWidth label="Email" name="email" type="email" margin="normal" onChange={handleChange} value={profile.email} required helperText={emailError} />
          <FormControl fullWidth margin="normal" required>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location"
              name="location"
              value={profile.location}
              label="Location"
              onChange={handleChange}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 200, // Set a maximum height for the dropdown
                  },
                },
              }}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField fullWidth label="Bio" name="bio" multiline rows={3} margin="normal" onChange={handleChange} value={profile.bio} required placeholder="Should not exceed 10 words" helperText={bioError} error={!!bioError} />
          <Box sx={{ display: 'column', justifyContent: 'space-between', mt: 2 }}>
            <Button type="submit" variant="contained" color="primary">
              {edit ? 'save' : 'submit'}
            </Button>
            <Button variant="contained" color="success" sx={{ml:3}} onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileForm;
