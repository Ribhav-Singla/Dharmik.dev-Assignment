# Notes App

A simple MERN stack application for creating and managing notes.

## Features

- Create new notes with title and content
- View all notes (sorted by creation date, newest first)
- Delete notes
- Loading indicators for API operations

## Tech Stack

- **Frontend**: React.js with Vite (Hooks, functional components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas

## Project Structure

```
notes-app/
├── client/ (React frontend)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Note.jsx
│   │   │   ├── NoteForm.jsx
│   │   │   └── NoteList.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   └── package.json
└── server/ (Express backend)
    ├── models/
    │   └── Note.js
    ├── routes/
    │   └── notes.js
    ├── index.js
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas account

### Installation

1. Clone the repository
2. Setup backend:
   ```bash
   cd notes-app/server
   npm install
   ```
3. Setup frontend:
   ```bash
   cd notes-app/client
   npm install
   ```

### Configuration

1. Create a `.env` file in the `server` directory with the following content:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/test
   ```
   Replace with your actual MongoDB Atlas connection string. Make sure to include `/test` at the end to connect to the correct database.

2. Create a `.env` file in the `client` directory with the following content:
   ```
   VITE_BACKEND_URL=http://localhost:5000/notes
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd notes-app/server
   node index.js
   ```

2. Start the frontend development server:
   ```bash
   cd notes-app/client
   npm run dev
   ```

3. Open your browser and navigate to the URL provided by Vite (typically `http://localhost:5173`)

## Deployment

- Backend: Deployed on Render
- Frontend: Can be deployed on Netlify or Vercel

## API Endpoints

- `GET /notes` - Get all notes (sorted by createdAt in descending order)
- `POST /notes` - Create a new note
- `DELETE /notes/:id` - Delete a specific note

## Troubleshooting

- If you don't see data in MongoDB Atlas, make sure your connection string in the server's `.env` file has the correct database name (e.g., `/test` at the end of the URL).
- The notes are stored in the "notes" collection within the specified database.
- Ensure your IP address is whitelisted in MongoDB Atlas Network Access settings. 