import { Card, CardContent, Avatar, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// Motion Variants for 3D Tilt Effect
const cardVariants = {
  hover: {
    rotateX: 10, // Slight tilt on the X axis
    rotateY: 10, // Slight tilt on the Y axis
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Adds a shadow effect for depth
    transition: { duration: 0.3, ease: "easeOut" },
  },
  tap: { scale: 0.97 },
};

const ProfileCard = ({ user }) => (
  <motion.div
    variants={cardVariants}
    whileHover="hover"
    whileTap="tap"
    style={{ perspective: "1000px" }} // Ensures the 3D effect is visible
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
        transformStyle: "preserve-3d", // Allows 3D transformation to be visible
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
      </Box>
    </Card>
  </motion.div>
);

export default ProfileCard;
