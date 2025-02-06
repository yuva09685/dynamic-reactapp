import { Box } from "@mui/material";
import ProfileCard from "./ProfileCard";

const ProfileList = ({ profiles, setEdit, onDelete }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, paddingX: 2 }}>
      {profiles.length > 0 ? (
        profiles.map((profile) => (<ProfileCard key={profile.id} user={profile}  setEdit={setEdit} onDelete={onDelete} />))
      ) : (
        <Box sx={{ textAlign: "center", padding: 2, fontSize: "18px", color: "gray" }}>No profiles found</Box>
      )}
    </Box>
  );
};

export default ProfileList;
