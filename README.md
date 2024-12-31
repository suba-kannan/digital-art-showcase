# Digital Art Showcase

## Overview

The **Digital Art Showcase** is an integrated platform that allows users to explore digital artwork, register accounts, log in, view profiles, and upload their artwork. This platform features a grid-based view of digital artworks, organized by categories, and provides functionality for user registration, login, profile management, and artwork uploads.

---

## Features

### Digital Art Showcase

- **Home Page**: Displays a grid of digital artworks, including featured and recent pieces. Users can click on an image to view it in a larger format and zoom in.
- **Categories Page**: Displays different categories of digital art (e.g., Abstract, Landscape, Sci-Fi) along with relevant icons.
- **About Us Page**: Introduces the platform and explains its mission and goals.
- **Account Registration Page**: Allows users to create an account by submitting their details (name, email, password).
- **User Authentication**: Supports registration with password validation and confirmation.
- **Recent Artwork Management**: Users can view and delete recent artworks.
- **Login Component**: Allows users to log in using their email and password. Upon successful login, users are redirected to the home page. If login fails, an error message is displayed.
- **Profile Component**: Displays the user's profile, including their name, email, and profile image. A button is provided to edit the profile (though editing is not yet implemented).
- **Upload Component**: Allows users to upload their artwork by selecting a file. A modal is displayed for file selection, and after a successful upload, a message is displayed to inform the user about the status.

---

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **axios**: Promise-based HTTP client for making requests.
- **React Router DOM**: For routing between pages.
- **Tailwind CSS**: Utility-first CSS framework for styling components.

---

## Directory Structure

```
backend/
├── models/
│   ├── register.js      # Handles user registration logic
│   └── upload.js        # Manages file upload logic
├── uploads/             # Uploaded image files
│   ├── 99810.jpg
│   ├── pic1.jpg
│   ├── pic2.jpg
│   ├── pic3.jpg
│   ├── pic4.jpg
│   ├── pic5.jpg
│   └── START.png
├── .gitignore           # Lists files and directories to be ignored by Git
├── package-lock.json    # Automatically generated for npm dependency management
├── package.json         # Metadata and dependencies for the project
├── README.md            # Documentation for the project
└── server.js            # Entry point for the backend server
```

```
frontend/
├── public/
│   └── vite.svg          # Public Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg     # React logo asset
│   ├── components/
│   │   ├── AboutUs.jsx   # About Us page component
│   │   ├── Account.jsx   # Account page component
│   │   ├── Categories.jsx# Categories page component
│   │   ├── Home.jsx      # Home page component
│   │   ├── Login.jsx     # Login page component
│   │   ├── Profile.jsx   # Profile page component
│   │   └── Upload.jsx    # Upload functionality component
│   ├── App.css           # Global styles
│   ├── App.jsx           # Main app component
│   ├── index.css         # Tailwind CSS styles
│   └── main.jsx          # Entry point for the app
├── .gitignore            # Lists files and directories to ignore in version control
├── eslint.config.js      # ESLint configuration for code quality
├── index.html            # Main HTML file for the app
├── package-lock.json     # Auto-generated for npm dependencies
├── package.json          # Project metadata and dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── vite.config.js        # Vite configuration
```

## Installation

Please reffer backend and frontend `README.md` files for the installation

```

```
