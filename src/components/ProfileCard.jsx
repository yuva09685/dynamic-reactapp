import { Card, CardContent, Avatar, Typography } from "@mui/material";

const ProfileCard = ({ user }) => (
  <Card
    sx={{
      width: "100%",
      padding: 2,
      display: "flex",
      alignItems: "center",
      background: "rgba(255, 255, 255, 0.8)", // Light transparent effect
      borderRadius: "15px",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    }}
  >
    <Avatar src={user.avatar} sx={{ width: 60, height: 60, marginRight: 2 }} />
    <CardContent>
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>{user.name}</Typography>
      <Typography color="textSecondary">{user.email}</Typography>
      <Typography color="textSecondary">{user.location}</Typography>
      <Typography variant="body2" sx={{ fontStyle: "italic" }}>{user.bio}</Typography>
    </CardContent>
  </Card>
);

export default ProfileCard;
