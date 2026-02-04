# MERN Notes App

A premium, simple Notes Application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features
- ✨ **Create, Read, Update, Delete** (CRUD) Notes
- 🎨 **Premium UI** with modern design and responsiveness
- 🚀 **Fast & Responsive** using React and Vite
- 💾 **Persistent Storage** with MongoDB

## Tech Stack
- **Frontend**: React, TypeScript, Vite, Vanilla CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running locally

### Installation

1.  **Install Dependencies**
    ```bash
    pnpm install:all
    ```
    (Or `pnpm install` in both `apps/client` and `apps/server`)

2.  **Environment Setup**
    - The server uses default port `5000` and local MongoDB `mongodb://localhost:27017/noteapp`.
    - You can configure `apps/server/.env` if needed.

### Running the App

Run both client and server concurrently:

```bash
pnpm dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## API Endpoints

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/notes`     | Get all notes   |
| POST   | `/api/notes`     | Create a note   |
| PUT    | `/api/notes/:id` | Update a note   |
| DELETE | `/api/notes/:id` | Delete a note   |
