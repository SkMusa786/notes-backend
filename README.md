# Notes App Backend

Backend API for the Notes Application built using Node.js, Express.js, MongoDB Atlas, and Mongoose.

## Features

* Create Notes
* Read Notes
* Update Notes
* Delete Notes
* MongoDB Atlas Integration
* REST API Architecture
* CORS Enabled

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* CORS

## Installation

Clone the repository:

```bash
git clone https://github.com/SkMusa786/notes-backend.git
cd notes-backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
MONGO_URL=your_mongodb_connection_string
```

Run the server:

```bash
node app.js
```

Server runs on:

```
http://localhost:3000
```

## API Endpoints

### Get All Notes

```http
GET /api/notes
```

### Create Note

```http
POST /api/notes
```

### Update Note

```http
PUT /api/notes/:id
```

### Delete Note

```http
DELETE /api/notes/:id
```

## Deployment

Backend deployed on Render.

## Author

Musa Shaik
