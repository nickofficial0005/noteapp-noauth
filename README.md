# MERN Notes App - Complete Beginner's Guide

A modern, fully-functional Notes Application built with the **MERN stack** (MongoDB, Express, React, Node.js). This is a monorepo project with a separate frontend and backend, perfect for learning full-stack development.

## 📋 Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites & Installation](#prerequisites--installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Development Workflow](#development-workflow)
- [Troubleshooting](#troubleshooting)
- [Common Tasks](#common-tasks)

---

## ✨ Features

- **📝 Complete CRUD Operations**: Create, Read, Update, Delete notes
- **🎨 Modern UI**: Responsive design using Tailwind CSS and Vanilla CSS
- **⚡ Fast Performance**: Built with Vite for blazing-fast development
- **🛡️ Type Safety**: Full TypeScript support on frontend and backend
- **💾 Persistent Storage**: All notes saved in MongoDB Atlas
- **🔄 Real-time Sync**: Instant updates across the application
- **📱 Mobile Responsive**: Works seamlessly on desktop and mobile devices

---

## 🏗️ Tech Stack

### Frontend
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 7** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Vanilla CSS** - Custom styling
- **React Compiler** - Performance optimization

### Backend
- **Node.js & Express.js** - Server framework
- **TypeScript** - Type-safe backend code
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Development Tools
- **pnpm** - Fast package manager
- **tsx/ts-node** - Run TypeScript directly
- **ESLint** - Code linting
- **Concurrently** - Run multiple processes

---

## 📁 Project Structure

```
ReactProject/
├── package.json                 # Root workspace configuration
├── pnpm-workspace.yaml          # Monorepo workspace setup
├── pnpm-lock.yaml               # Dependency lock file
│
├── apps/
│   ├── client/                  # React Frontend
│   │   ├── src/
│   │   │   ├── App.tsx          # Main App component
│   │   │   ├── App.css          # App styles
│   │   │   ├── main.tsx         # React entry point
│   │   │   ├── index.css        # Global styles
│   │   │   └── assets/          # Images, icons, etc.
│   │   ├── public/              # Static files
│   │   ├── index.html           # HTML template
│   │   ├── package.json         # Frontend dependencies
│   │   ├── tsconfig.json        # TypeScript configuration
│   │   ├── vite.config.ts       # Vite build configuration
│   │   └── eslint.config.js     # ESLint rules
│   │
│   └── server/                  # Express Backend
│       ├── index.ts             # Main server file
│       ├── .env                 # Environment variables
│       ├── package.json         # Backend dependencies
│       ├── tsconfig.json        # TypeScript configuration
│       ├── routes/
│       │   └── notes.ts         # Notes API routes
│       └── models/
│           └── Note.ts          # MongoDB Note schema
```

**Key Folders Explained:**

| Folder | Purpose |
|--------|---------|
| `apps/client` | React frontend application |
| `apps/server` | Express backend API server |
| `apps/client/src` | React components and styles |
| `apps/server/routes` | API endpoint handlers |
| `apps/server/models` | Database schemas (MongoDB) |

---

## 📦 Prerequisites & Installation

### Step 1: Install Node.js and npm

**Download Node.js:**
1. Visit [nodejs.org](https://nodejs.org)
2. Download the **LTS (Long Term Support)** version
3. Run the installer and follow the prompts
4. Verify installation by opening terminal/PowerShell and running:
   ```bash
   node --version
   npm --version
   ```

### Step 2: Install pnpm (Package Manager)

pnpm is faster and more efficient than npm. Install it globally:

```bash
npm install -g pnpm@10.28.2
```

Verify installation:
```bash
pnpm --version
```

### Step 3: Clone or Download the Project

If you have the project folder, navigate to it:
```bash
cd C:\Users\user\Documents\Projects\ReactProject
```

Or clone it from a repository:
```bash
git clone <repository-url>
cd ReactProject
```

### Step 4: Install All Dependencies

From the **root project folder**, run:

```bash
pnpm install:all
```

This installs dependencies for both frontend and backend. What this does:
- Installs packages for `apps/client`
- Installs packages for `apps/server`
- Creates `node_modules` folders in each app directory
- Generates `pnpm-lock.yaml` (dependency lock file)

**Alternatively**, if the script doesn't work:
```bash
pnpm install -r
```

---

## ⚙️ Configuration

### Database Configuration

The project uses **MongoDB Atlas** (cloud database). Here's how to set it up:

#### Option 1: Using MongoDB Atlas (Recommended for Cloud)

1. **Create MongoDB Atlas Account:**
   - Visit [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Sign up for free
   - Create a new cluster

2. **Create a Database User:**
   - In MongoDB Atlas Dashboard → Click your cluster
   - Go to **Database Access**
   - Click **Add New Database User**
   - Create username and password (e.g., `nickofficial0005_db_user`)
   - **Copy the password** - you'll need it

3. **Get Connection String:**
   - Go to **Clusters** → Click **Connect**
   - Choose **Drivers** → Select Node.js
   - Copy the connection string (looks like: `mongodb+srv://...`)

4. **Replace Username and Password:**
   Replace `<username>` and `<password>` in the string:
   ```
   mongodb+srv://nickofficial0005_db_user:8wgZcsI2FsvDg7eP@cluster0.q4duory.mongodb.net/noteapp?appName=Cluster0
   ```

5. **Whitelist Your IP:**
   - In MongoDB Atlas → **Network Access**
   - Click **Add IP Address**
   - Select **Allow Access from Anywhere** (for development) or add your specific IP
   - Click **Confirm**

6. **Update `.env` file** (see below)

#### Option 2: Using Local MongoDB (For Development)

1. **Install MongoDB Locally:**
   - Visit [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
   - Download and install for your OS
   - Start MongoDB service (usually runs automatically)

2. **Use Local Connection String:**
   ```
   MONGO_URI=mongodb://localhost:27017/noteapp
   ```

### Environment Variables (.env)

Create or update `apps/server/.env`:

```env
PORT=5000
MONGO_URI=mongodb+srv://nickofficial0005_db_user:8wgZcsI2FsvDg7eP@cluster0.q4duory.mongodb.net/noteapp?appName=Cluster0
```

**What each variable means:**

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Port the backend runs on | `5000` |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |

**⚠️ Important:** Never commit the `.env` file to Git (add to `.gitignore`)!

---

## 🚀 Running the Application

### Start Both Frontend and Backend Together

From the **root project folder**:

```bash
pnpm dev
```

This command:
1. Starts the **Backend** on `http://localhost:5000`
2. Starts the **Frontend** on `http://localhost:5173`
3. Both run simultaneously in your terminal

**Expected Output:**
```
[0]   ➜  Local:   http://localhost:5173/
[1] Server running on port 5000
[1] MongoDB connected
```

### Start Only Backend

```bash
pnpm --filter server dev
```

**Backend runs on:** `http://localhost:5000`

### Start Only Frontend

```bash
pnpm --filter client dev
```

**Frontend runs on:** `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

This creates optimized production builds in:
- `apps/client/dist` - Frontend build
- `apps/server/dist` - Backend build

---

## 🔌 API Endpoints

The backend provides the following REST API endpoints:

### Base URL
```
http://localhost:5000/api/notes
```

### 1. Get All Notes
```
GET /api/notes
```

**Description:** Retrieves all notes from the database

**Response Example:**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "My First Note",
    "content": "This is the content of my note",
    "createdAt": "2024-02-04T10:30:00.000Z"
  },
  {
    "_id": "507f1f77bcf86cd799439012",
    "title": "Shopping List",
    "content": "Milk, eggs, bread",
    "createdAt": "2024-02-04T11:15:00.000Z"
  }
]
```

### 2. Create a New Note
```
POST /api/notes
```

**Request Body:**
```json
{
  "title": "New Note Title",
  "content": "This is the note content"
}
```

**Response Example:**
```json
{
  "_id": "507f1f77bcf86cd799439013",
  "title": "New Note Title",
  "content": "This is the note content",
  "createdAt": "2024-02-04T12:00:00.000Z"
}
```

### 3. Get a Single Note
```
GET /api/notes/:id
```

**Example:**
```
GET /api/notes/507f1f77bcf86cd799439011
```

**Response Example:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "My First Note",
  "content": "This is the content of my note",
  "createdAt": "2024-02-04T10:30:00.000Z"
}
```

### 4. Update a Note
```
PUT /api/notes/:id
```

**Example:**
```
PUT /api/notes/507f1f77bcf86cd799439011
```

**Request Body:**
```json
{
  "title": "Updated Note Title",
  "content": "Updated content"
}
```

**Response Example:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Updated Note Title",
  "content": "Updated content",
  "createdAt": "2024-02-04T10:30:00.000Z"
}
```

### 5. Delete a Note
```
DELETE /api/notes/:id
```

**Example:**
```
DELETE /api/notes/507f1f77bcf86cd799439011
```

**Response Example:**
```json
{
  "message": "Note deleted"
}
```

### Testing API Endpoints

#### Using cURL (Command Line)

**Get all notes:**
```bash
curl http://localhost:5000/api/notes
```

**Create a note:**
```bash
curl -X POST http://localhost:5000/api/notes \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Test\",\"content\":\"Test content\"}"
```

#### Using Postman (GUI Tool)

1. Download [Postman](https://www.postman.com/downloads/)
2. Create a new request
3. Set method to `GET` and URL to `http://localhost:5000/api/notes`
4. Click **Send**

---

## 💻 Development Workflow

### Editing Code

#### Frontend Changes (React)
- Edit files in `apps/client/src/`
- Changes hot-reload automatically (no refresh needed)
- Common files:
  - `App.tsx` - Main component
  - `App.css` - Styles

#### Backend Changes (Express)
- Edit files in `apps/server/`
- Restart the server with `Ctrl+C` then `pnpm --filter server dev`
- Common files:
  - `index.ts` - Main server setup
  - `routes/notes.ts` - API endpoints
  - `models/Note.ts` - Database schema

### Code Quality

**Lint Code (Check for errors):**
```bash
pnpm --filter client lint
```

**Format Code:**
```bash
pnpm --filter client lint --fix
```

### Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to repository
git push
```

---

## 🆘 Troubleshooting

### Issue 1: "ECONNREFUSED" MongoDB Connection Error

**Error Message:**
```
MongoDB connection error: Error: querySrv ECONNREFUSED
```

**Solutions:**

1. **Check MongoDB Cluster Status:**
   - Go to MongoDB Atlas Dashboard → Clusters
   - Ensure cluster status is "Running" (not "Paused")
   - If paused, click play button to resume

2. **Whitelist Your IP:**
   - MongoDB Atlas → Network Access
   - Add your IP address or allow `0.0.0.0/0`
   - Wait 1-2 minutes for changes to take effect

3. **Verify Connection String:**
   - Check `.env` file has correct `MONGO_URI`
   - Verify username and password are correct
   - Match cluster name exactly

4. **Test DNS (Windows PowerShell):**
   ```powershell
   nslookup cluster0.q4duory.mongodb.net
   ```
   If this fails, check your internet connection

### Issue 2: "Port Already in Use"

**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:**

The port 5000 is already occupied. Either:

1. **Stop existing process:**
   - Find what's using port 5000 and close it
   - Or use a different port in `.env`: `PORT=5001`

2. **Change port in .env:**
   ```env
   PORT=5001
   ```

### Issue 3: "Module Not Found" Error

**Error:**
```
Error: Cannot find module './routes/notes'
```

**Solution:**

The import path is incorrect. Make sure:
1. File exists at the specified path
2. File extension is correct (`.ts` not `.js`)
3. Imports use `.js` extension in TypeScript files for ESM:
   ```typescript
   import noteRoutes from './routes/notes.js';
   ```

### Issue 4: "VITE Error" or Blank Frontend

**Solution:**

1. Clear Vite cache:
   ```bash
   rm -r apps/client/.vite
   ```

2. Reinstall dependencies:
   ```bash
   cd apps/client
   pnpm install
   cd ../..
   ```

3. Restart development server:
   ```bash
   pnpm dev
   ```

### Issue 5: "pnpm command not found"

**Solution:**

Install pnpm globally:
```bash
npm install -g pnpm@10.28.2
```

Verify:
```bash
pnpm --version
```

---

## 📚 Common Tasks

### Add a New Backend Route

1. Edit `apps/server/routes/notes.ts`
2. Add your new route handler:
   ```typescript
   router.get('/search', async (req: Request, res: Response) => {
     // Your code here
   });
   ```
3. Restart the server

### Change Frontend Styling

1. Edit `apps/client/src/App.css` or specific component styles
2. Changes appear instantly in the browser

### Update Database Schema

1. Edit `apps/server/models/Note.ts`
2. Add new fields to the schema
3. Update frontend to use new fields
4. Restart the server

### Deploy to Production

1. Build the application:
   ```bash
   pnpm build
   ```

2. Deploy `apps/client/dist` to a hosting service (Vercel, Netlify, etc.)

3. Deploy backend to a server (Heroku, AWS, etc.)

---

## 📞 Getting Help

- Check MongoDB docs: [docs.mongodb.com](https://docs.mongodb.com)
- React docs: [react.dev](https://react.dev)
- Express docs: [expressjs.com](https://expressjs.com)
- Vite docs: [vitejs.dev](https://vitejs.dev)
- Open an issue in the repository if you need help

---

## 📄 License

ISC License - Feel free to use this project however you like!
