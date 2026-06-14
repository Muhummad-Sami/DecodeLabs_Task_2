# Project 2 Backend

A simple Node.js Express backend for managing users with in-memory storage.

## Features

- Create a new user
- Fetch all users
- Fetch a user by ID
- Update a user
- Delete a user

## Endpoints

- `POST /api/users`
  - Request body: `{ "name": "string", "email": "string" }`
  - Creates a new user
- `GET /api/users`
  - Returns all users
- `GET /api/users/:id`
  - Returns a single user by ID
- `PUT /api/users/:id`
  - Request body can include `name` and/or `email`
  - Updates the user with the specified ID
- `DELETE /api/users/:id`
  - Deletes the user with the specified ID

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Run

```bash
node server.js
```

The server runs on `http://localhost:5000`.

## Notes

- Data is stored in-memory and will reset when the server restarts.
- This project uses Express 5 and CommonJS.

## License

This project is released under the ISC license.
