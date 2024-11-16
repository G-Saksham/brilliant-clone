# Brilliant Clone

A simplified version of Brilliant's learning platform built with React, TypeScript, Recoil, and TailwindCSS.

## Tech Stack

- React 18+ with TypeScript
- Recoil for state management
- TailwindCSS for styling
- React Router for navigation
- Firebase Authentication (in progress)

## Project Status

Current status of different features:

| Feature              | Status      | Notes                               |
|---------------------|-------------|-------------------------------------|
| Project Setup       | ✅ Complete | Basic project structure implemented |
| Landing Page        | ✅ Complete  | Basic layout and styling done, needs responsiveness    |
| Authentication      | 🟡 Partial   | Firebase integration planned        |
| Course Dashboard    | ✅ Complete  | Desktop layout done                  |
| Responsive Design   | ✅ Complete  | Desktop layout done                 |
| State Management    | 🟡 Partial  | Recoil setup done                  |

Status Legend:
- ✅ Complete: Feature is fully implemented and tested
- 🟡 Partial: Feature is partially implemented or in progress
- 🔴 Pending: Feature is planned but not yet implemented
- ⚠️ Has Issues: Feature is implemented but has known issues

## Setup Instructions

1. Clone the repository
```bash
git clone https://github.com/G-Saksham/brilliant-clone.git
cd brilliant-clone
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory with the following variables:
```
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_AUTH_DOMAIN=xxx
VITE_FIREBASE_PROJECT_ID=xxx
VITE_FIREBASE_STORAGE_BUCKET=xxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
VITE_FIREBASE_APP_ID=xxx
```

4. Start the development server
```bash
npm run dev
```

## Project Structure

```
src/
├── components/        # Reusable components
├── pages/            # Page components
├── store/            # Recoil state management
├── types/            # TypeScript interfaces
├── utils/            # Utility functions
└── App.tsx           # Main application component
```

## Features Implemented

- Basic project structure and routing
- Landing page layout (desktop version)
- Recoil state management setup
- Component architecture foundation

## In Progress

- Firebase authentication integration
- Responsive design implementation
- Course dashboard development
- Loading and error states

## Known Limitations

- Authentication not yet implemented
- Mobile responsiveness in progress
- Course data currently using dummy content

## Local Development

The project runs on `http://localhost:5173` by default when started with `npm run dev`.

## Future Improvements

- Complete Firebase authentication integration
- Implement responsive design for all screen sizes
- Add loading and error states
- Complete course dashboard implementation
- Add animations and transitions