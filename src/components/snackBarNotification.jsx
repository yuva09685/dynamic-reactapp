import React, { createContext, useState, useContext } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";

// Create Context
const SnackbarContext = createContext();

// Custom Hook to Use Snackbar
export const useSnackbar = () => useContext(SnackbarContext);

// Snackbar Provider Component
const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ open: false, message: "", severity: "success" });
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}

      {/* Snackbar UI with Slide Animation */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000} // Closes after 3s
        onClose={handleCloseSnackbar}
        TransitionComponent={Slide}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "bold",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
