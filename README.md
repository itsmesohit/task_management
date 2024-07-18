# Task Manager Project

## Overview

This repository contains a task manager application with a Python backend and a React frontend. The project can be set up and run using Docker or without Docker.

## Directory Structure

- `client/` - Contains the React frontend application.
- `app/` - Contains the Python backend application.
- `Dockerfile` - Dockerfile for the backend.
- `client/Dockerfile` - Dockerfile for the frontend.
- `docker-compose.yml` - Docker Compose file to run both frontend and backend services.

## Setup and Run with Docker

### Prerequisites

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/itsmesohit/task_management.git
   cd task_manager

2. **Create a .env File**

In the root directory of the project, create a .env file with the following content:

    ```bash
    DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require 
    
Replace username, password, host, port, and database with your actual database credentials.

3. **Build and Run the Containers**

Use Docker Compose to build and start the containers:

    ```bash
    docker-compose up --build


3. **Access the Application**
    
Frontend: http://localhost
Backend API: http://localhost:3000/api/v1


## Setup and Run without Docker

Prerequisites

Python: Install Python
Node.js: Install Node.js
PostgreSQL: Install PostgreSQL

Steps Clone the Repository

    ```bash
    git clone https://github.com/itsmesohit/task_management.git
    cd task_manager

Set Up the Backend

Navigate to the app directory:

    ```bash
    cd app

    Install Python dependencies:

    ```bash
    pip install -r requirements.txt
    Create a .env file in the app directory with the following conten


env

    ```bash
    DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
    
Replace username, password, host, port, and database with your actual database credentials.

Start the backend server:

uvicorn app.main:app --host 0.0.0.0 --port 80
Set Up the Frontend

Navigate to the client directory:

cd ../client
Install Node.js dependencies:


npm install
Build the React application:


npm run build
To serve the frontend locally, you can use a static file server like http-server. Install it globally if you don't have it:

npm install -g http-server
Start the server:

http-server build -p 80
Access the Application

Frontend: http://localhost
Backend API: http://localhost:80/api/v1
Additional Information
CORS Configuration: The backend is configured to allow CORS from http://localhost.
Database Configuration: Ensure that your PostgreSQL instance is accessible from the backend and the credentials are correct.
