import React from 'react';
import { Card, Box, Avatar, CardContent, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Icon } from '@mui/material'; 

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
          maxWidth: 300,
          margin: "10px auto",
          padding: 1,
          borderRadius: "12px",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
          background: "linear-gradient(135deg, #f3f3f3, #ffffff)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start" padding={1}>
          <Box display="flex" alignItems="center" >
            <Avatar src={user.avatar} sx={{ width: 40, height: 40, marginRight: 1 }} />
            <Typography variant="subtitle1" fontWeight="bold" noWrap>
              {user.name}
            </Typography>
          </Box>
          <CardContent sx={{ padding: 0 }}>
          <List dense>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Icon sx={{ fontSize: "18px" }}>email</Icon> {/* Smaller icon */}
              </ListItemIcon >
              <ListItemText primary={<Typography variant="body1">{user.email}</Typography>} /> {/* Larger text */}
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Icon sx={{ fontSize: "18px" }}>location_on</Icon> {/* Smaller icon */}
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body1">{user.location}</Typography>} /> {/* Larger text */}
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Icon sx={{ fontSize: "18px" }}>info</Icon> {/* Smaller icon */}
              </ListItemIcon>
              <ListItemText primary={<Typography variant="body1">{user.bio}</Typography>} /> {/* Larger text */}
            </ListItem>
          </List>
          </CardContent>
          <IconButton
            aria-label="delete"
            onClick={handleDelete}
            sx={{ position: "absolute", top: 5, right: 5, padding: 0, color: "gray" }} // Positioned at top-right
          >
            <i className="material-icons" style={{ fontSize: "18px" }}>close</i> {/* "x" icon, smaller */}
          </IconButton>
        </Box>
      </Card>
    </div>
  );
};

export default UserCard;
