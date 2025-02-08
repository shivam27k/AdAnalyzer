# Ad Performance Analyzer

Deployment: https://ad-analyzer.netlify.app/

## Overview

The Ad Performance Analyzer is a web application designed to analyze advertisement performance by processing CSV data containing keyword metrics. Users can upload CSV files, and the backend leverages Gemini AI to extract insights, identify high- and low-performing keywords, and suggest optimizations. The frontend provides a user-friendly interface for uploading files and viewing results.

## Architecture Diagram

(Insert a simple diagram illustrating the system architecture, showing interactions between the frontend, backend, LangGraph agent, and LLM API.)

## Tech Stack

-   Backend: Node.js (Express, ES Modules)

-   Frontend: React (Vite, React Router, Axios)

-   LLM Framework: Google Gemini AI via @google/generative-ai

-   Hosting: Any free platform

-   Containerization: Docker (Optional)

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

-   Request: FormData containing a CSV file

-   Response: `{ message: 'File uploaded successfully', filePath: 'uploads/file.csv' }`

Analyze Ad Data

`POST /analyze`

-   Request: `{ filePath: 'uploads/file.csv' }`

-   Response: `{ message: 'Analysis complete', analysis: <analysis result> }`

## Docker

To run with docker open the docker desktop in windows and then run the following command in the root folder containing all the folders (frontend, backend):

```
docker-compose -f Docker/docker-compose.yml up --build
```

## Assumptions

-   The uploaded CSV file contains structured advertisement data with relevant keyword performance metrics.

-   The target audience consists of digital marketers and advertising professionals looking to optimize campaigns.

-   The analysis relies on Gemini AI for processing and insights generation.

-   Users require an intuitive and minimalistic UI for interacting with the system.

-   The application will be hosted on freely available platforms for deployment.
