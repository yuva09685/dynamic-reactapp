import React from 'react';
import { Card, Box, Avatar, CardContent, Typography, IconButton } from '@mui/material';

const UserCard = ({ user, setEdit, onDelete }) => {
  const handleClick = (e) => {
    e.stopPropagation(); setEdit(user);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    const HardDelete = window.confirm("Are you sure you want to delete this? This action is irreversible.");
    if (HardDelete) { onDelete(user.id); }
  };

  return (
    <div
      whileHover="hover"
      whileTap="tap"
      style={{ perspective: "1000px" }} // Ensures the 3D effect is visible
      onClick={handleClick}
    >
      <Card
        sx={{
          maxWidth: 380,
          margin: "20px auto",
          padding: 2,
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          background: "linear-gradient(135deg, #f3f3f3, #ffffff)",
          overflow: "hidden",
        }}
      >
        <Box display="flex" alignItems="center">
          <Avatar src={user.avatar} sx={{ width: 60, height: 60, marginRight: 2 }} />
          <CardContent>
            <Typography variant="h6" fontWeight="bold">
              {user.name}
            </Typography>
            <Typography color="textSecondary">{user.email}</Typography>
            <Typography color="textSecondary">{user.location}</Typography>
            <Typography variant="body2">{user.bio}</Typography>
          </CardContent>
          <IconButton aria-label="delete" onClick={handleDelete} >
            <i className="material-icons">delete</i>
          </IconButton>
        </Box>
      </Card>
    </div>
  );
};

export default UserCard;
