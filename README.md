# Fibonacci Web App

## Introduction

This project is a simple web application that allows users to generate the first n Fibonacci numbers. The application consists of a frontend built with React and a backend built with Node.js and Express. The backend stores computed Fibonacci numbers in a MySQL database to avoid recomputation.

## Features

- Users can input the value of n to generate the first n Fibonacci numbers.
- The backend stores computed Fibonacci numbers in a MySQL database to avoid recomputation.
- Frontend provides a simple and intuitive user interface for inputting n and displaying the generated Fibonacci numbers.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Node.js: A JavaScript runtime environment for building server-side applications.
- Express: A minimalist web framework for Node.js.
- MySQL: A relational database management system.

## Prerequisites

Before running this application, ensure that you have the following installed:

- Node.js and npm: Download and install from [Node.js official website](https://nodejs.org/).
- MySQL: Download and install from [MySQL official website](https://www.mysql.com/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anaydilipnaik/fib_biohub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fib-biohub
   ```

3. Install dependencies for both frontend and backend:

   ```cd frontend
   npm install
   cd ../backend
   npm install
   ```

4. Configure MySQL and Backend Environment Variables:
   a. Create a new MySQL database for the application.
   b. Create .env file in the backend folder and paste the following:
   `PORT=3001
HOST=localhost
DB_USER=root
DB_PASSWORD=mysql12345
DATABASE=fib_db
`

5. Configure Frontend Environment Variables
   Create .env file in the frontend folder and paste the following:
   `REACT_APP_PROTOCOL=http
REACT_APP_HOST=localhost
REACT_APP_BACKEND_PORT=3001
`

## Usage

1. Start the Backend Server

   ```cd backend
   node server.js
   ```

2. Start the frontend server

   ```cd frontend
   npm start
   ```

3. Access the web application in your browser at http://localhost:3000.

4. Input the value of n into the provided field.

5. Click the "Submit" button to generate the first n Fibonacci numbers.

6. View the generated Fibonacci numbers displayed on the page.
