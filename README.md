# Authentication Challenge

This project demonstrates a backend application where users can register, log in, and add movies to a database. It showcases my backend development skills.

****Please be aware that the frontend is close to nonexistent since it's purpose is to demonstrate my backend capabilities****

## Features

- User registration
- User authentication
- Adding movies to the database

## Getting Started

The included `.env` file allows for seamless testing. **This is temporary and will be removed.**

### Prerequisites

- Node.js installed
- npm installed

### Installation

1. **Clone the repository**:

```bash
git clone https://github.com/AtikoSpeed/auth-challenge.git
```

2. **Navigate to the project directory**:

```bash
cd auth-challenge
```

3. **Install dependencies**:

```bash
npm ci
```

### Running the Application

Start the front and back-end servers with a single command:

```bash
npm run dev
```

The server will run on the port specified in the `.env` file.

## Testing the Application

Use an API testing tool like Postman to interact with the endpoints.

### Endpoints

- **Register**

  - **Endpoint**: `POST /register`
  - **Description**: Register a new user.
  - **Request Body**:
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
  - **Responses**:
    - `201 Created`: "User created successfully"
    - `409 Conflict`: "User already exists"

- **Login**

  - **Endpoint**: `POST /login`
  - **Description**: Authenticate a user and receive a JWT token.
  - **Request Body**:
    ```json
    {
      "username": "your_username",
      "password": "your_password"
    }
    ```
  - **Responses**:
    - `200 OK`: `{ "data": "<token>" }`
    - `401 Unauthorized`:
      - `{ "error": "Invalid username." }`
      - `{ "error": "Invalid password." }`

- **Get All Movies**

  - **Endpoint**: `GET /movies`
  - **Description**: Retrieve all movies from the database.
  - **Responses**:
    - `200 OK`: `{ "data": [...] }`

- **Add Movie**
  - **Endpoint**: `POST /movies`
  - **Description**: Add a new movie to the database. Requires authentication.
  - **Headers**:
    ```
    Authentication: Bearer <token>
    ```
  - **Request Body**:
    ```json
    {
      "title": "Movie Title",
      "description": "Movie Description",
      "runtimeMins": 120
    }
    ```
  - **Responses**:
    - `200 OK`: "Movie created successfully"
    - `401 Unauthorized`: `{ "error": "Invalid token provided." }`
    - `409 Conflict`: "Movie already exists"

## Purpose

This project is intended to demonstrate my backend capabilities as a full-stack developer.
