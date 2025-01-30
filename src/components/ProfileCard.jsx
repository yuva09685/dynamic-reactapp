import { Card, CardContent, Avatar, Typography } from "@mui/material";

const ProfileCard = ({ user }) => (
  <Card sx={{ maxWidth: 400, margin: "20px auto", padding: 2, display: "flex", alignItems: "center" }}>
    <Avatar src={user.avatar} sx={{ width: 60, height: 60, marginRight: 2 }} />
    <CardContent>
      <Typography variant="h6">{user.name}</Typography>
      <Typography color="textSecondary">{user.email}</Typography>
      <Typography color="textSecondary">{user.location}</Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </CardContent>
  </Card>
);

export default ProfileCard;
