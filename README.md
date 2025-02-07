# Ad Performance Analyzer

## Overview

The Ad Performance Analyzer is a web application that allows users to upload advertisement data in CSV format. The backend processes the data using Gemini AI and provides an analysis of keyword performance. The frontend provides an intuitive interface for file upload, analysis, and insights visualization.

## Tech Stack

Backend: Node.js (Express, ES Modules)

Frontend: React (Vite, React Router, Axios)

LLM Framework: Google Gemini AI via @google/generative-ai

Hosting: Any free platform

Containerization: Docker (Optional)

## Folder Structure

```
ad-performance-analyzer/
│── backend/
│   ├── controllers/       # Business logic
│   ├── routes/            # API routes
│   ├── services/          # CSV & AI services
│   ├── uploads/           # Temporary file storage
│   ├── .env               # Environment variables
│   ├── server.js          # Main server file
│   ├── package.json       # Dependencies
│
│── frontend/
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page-level components
│   │   ├── api.js         # API calls
│   │   ├── App.js         # Main React App
│   │   ├── main.js        # Entry point
│   ├── public/            # Static assets
│   ├── vite.config.js     # Vite config
│   ├── package.json       # Frontend dependencies
│
│── README.md              # Documentation
│── .gitignore             # Git ignored files
```

## Installation & Setup

#### Prerequisites

Node.js (v18+)

Docker

Netlify CLI (for frontend deployment)

#### Backend Setup

```
cd backend
npm install
node server.js
```

#### Frontend Setup

```
cd frontend
npm install
npm run dev
```

## API Endpoints

Upload CSV File

`POST /upload`

Request: FormData containing a CSV file

Response: { message: 'File uploaded successfully', filePath: 'uploads/file.csv' }

Analyze Ad Data

`POST /analyze`

Request: { filePath: 'uploads/file.csv' }

Response: { message: 'Analysis complete', analysis: <analysis result> }

## Docker

To run with docker open the docker desktop in windows and then run the following command in the root folder containing all the folders (frontend, backend):

```
docker-compose -f Docker/docker-compose.yml up --build
```
