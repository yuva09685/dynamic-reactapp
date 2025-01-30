# Profile Collection App - Frontend

## Tech Stack:
- React.js (CRA)
- Material-UI (MUI) for UI components
- Axios for API requests

## Project Structure:
- `App.js` - Main entry point that includes ProfileForm and ProfileList components.
- `components/ProfileForm.js` - Handles user profile creation.
- `components/ProfileList.js` - Fetches and displays profiles from the backend.
- `components/ProfileCard.js` - Displays individual profile details in a card format.

## Features:
- Users can create a profile with Name, Email, Bio, and Location.
- Profile pictures are fetched from Gravatar (fallback to default avatar).
- Form validation ensures all fields are required.
- Displays default profiles if the API fails.

## API Endpoints Used:
- `POST /api/profiles/userCreate` - Adds a new user profile.
- `POST /api/profiles/userList` - Retrieves all user profiles.

## How to Run:
1. Install dependencies: `pnpm install`
2. Start the frontend: `pnpm start`
3. Ensure the backend is running for full functionality.
