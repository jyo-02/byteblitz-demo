# ByteBlitz

ByteBlitz is a full-stack web application designed to help users practice and improve their coding skills. It features a platform for solving coding problems, managing playlists of problems, and tracking user progress.

## IMPORTANT
**This is just the demo code. Please contact the owner for the full code.**

## Features

**For Users:**

- **Problem Solving:** Solve a variety of coding problems with an integrated code editor and test case runner.
- **Problem Playlists:** Create and manage custom playlists of coding problems for focused practice.
- **User Authentication:** Secure user registration and login.
- **Profile Management:** View and update user profiles.
- **Progress Tracking:** Monitor personal progress on coding challenges.

**For Admins:**

- **Admin Dashboard:** Manage problems, users, and playlists.

## Technologies

### Client (Frontend)

- **React.js:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **Zustand:** A small, fast, and scalable bearbones state-management solution.
- **React Router:** For declarative routing in React applications.

### Server (Backend)

- **Node.js:** JavaScript runtime environment.
- **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
- **MongoDB:** A NoSQL database for storing application data.
- **Mongoose:** MongoDB object data modeling (ODM) for Node.js.
- **bcryptjs:** For hashing passwords.
- **jsonwebtoken:** For implementing JWT-based authentication.
- **Cookie-parser:** Parse Cookie header and populate `req.cookies`.
- **Cors:** Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (LTS version recommended)
- npm (usually comes with Node.js)
- MongoDB instance (local or cloud-hosted)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/CodeBuddy.git
    cd CodeBuddy
    ```

2.  **Backend Setup:**

    Navigate to the `server` directory and install dependencies:

    ```bash
    cd server
    npm install
    ```

    Create a `.env` file in the `server` directory and add your environment variables. Example:

    ```
    PORT=8000
    MONGODB_URI=yourmongodburi
    CORS_ORIGIN=*
    ACCESS_TOKEN_SECRET=your_access_token_secret
    REFRESH_TOKEN_SECRET=your_refresh_token_secret
    ACCESS_TOKEN_EXPIRY=1d
    REFRESH_TOKEN_EXPIRY=10d
    ```

    Start the backend server:

    ```bash
    npm start
    ```

3.  **Frontend Setup:**

    Open a new terminal, navigate to the `client` directory and install dependencies:

    ```bash
    cd ../client
    npm install
    ```

    Start the frontend development server:

    ```bash
    npm run dev
    ```

    The frontend application should now be running at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment

### Vercel (Frontend)

The frontend can be easily deployed to Vercel. Ensure your `VITE_BACKEND_URL` environment variable is set correctly in Vercel to point to your deployed backend API.

### Render (Backend)

The backend can be deployed to platforms like Render. Make sure all necessary environment variables are configured in your Render dashboard.
