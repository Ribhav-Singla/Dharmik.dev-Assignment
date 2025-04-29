# Notes App

A simple MERN stack application for creating and managing notes.

## Features

- Create new notes with title and content
- View all notes (sorted by creation date, newest first)
- Delete notes
- Loading indicators for API operations

## Tech Stack

- **Frontend**: React.js (Hooks, functional components)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Project Structure

```
notes-app/
├── client/ (React frontend)
│   ├── src/
│   │   ├── components/
│   │   │   ├── NoteForm.js
│   │   │   ├── NoteForm.css
│   │   │   ├── NoteList.js
│   │   │   └── NoteList.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
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
- MongoDB Atlas account (or local MongoDB installation)

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
   MONGODB_URI=your_mongodb_connection_string
   ```
   Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### Running the Application

1. Start the backend server:
   ```bash
   cd notes-app/server
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd notes-app/client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Deployment

- Backend: Deploy to Render, Railway, or Cyclic
- Frontend: Deploy to Netlify or Vercel

## API Endpoints

- `GET /notes` - Get all notes (sorted by createdAt in descending order)
- `POST /notes` - Create a new note
- `DELETE /notes/:id` - Delete a specific note 