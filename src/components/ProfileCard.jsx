import React from 'react';
import { useState } from "react";
import { Button, DialogActions, DialogContent,Dialog,Card, Box, Avatar, CardContent, Typography, IconButton, List, ListItem, ListItemIcon, ListItemText, Icon } from '@mui/material';

const UserCard = ({ user, setEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCloseDeleteDialog = (e) => {
    e.stopPropagation();
    setOpenDeleteDialog(false);
  };

  const handleConfirmDelete = (event) => {
    event.stopPropagation();
    onDelete(user.id);
    setOpenDeleteDialog(false);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    setOpenDeleteDialog(true);
};

  const handleClick = (e) => {
    e.stopPropagation(); setEdit(user);
  };

  return (
    <div
      whileHover="hover"
      whileTap="tap"
      style={{ perspective: "1000px" }} 
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start" padding={0.4}>
          <Box display="flex" alignItems="center" >
            <Avatar src={user.avatar} sx={{ width: 40, height: 40, marginRight: 1.5 }} />
            <Typography variant="subtitle1" fontWeight="bold" noWrap>
              {user.name}
            </Typography>
          </Box>
          <CardContent sx={{ padding: 0, marginTop: 0.1, alignItems: 'center' }}>
            <List dense>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <Icon sx={{ fontSize: "15px" }}>email</Icon> {/* Smaller icon */}
                </ListItemIcon >
                <ListItemText primary={<Typography variant="body1">{user.email}</Typography>} /> {/* Larger text */}
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <Icon sx={{ fontSize: "15px" }}>location_on</Icon> {/* Smaller icon */}
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1">{user.location}</Typography>} /> {/* Larger text */}
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <Icon sx={{ fontSize: "17px" }}>info</Icon> {/* Smaller icon */}
                </ListItemIcon>
                <ListItemText primary={<Typography variant="body1">{user.bio}</Typography>} /> {/* Larger text */}
              </ListItem>
            </List>
          </CardContent>
          <IconButton
            aria-label="delete"
            onClick={handleDelete}
            sx={{ 
              position: "absolute", 
              top: 5, 
              right: 5, 
              padding: 0, 
              color: "gray",
              visibility: isHovered ? "visible" : "hidden" 
            }}
          >
            <i className="material-icons" style={{ fontSize: "18px" }}>close</i>
          </IconButton>
          <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
            <DialogContent>
              <Typography>Are you sure you want to delete?</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
              <Button onClick={handleConfirmDelete} color="error">Delete</Button>
            </DialogActions>
          </Dialog>
        </Box>
      </Card>
    </div>
  );
};

export default UserCard;
