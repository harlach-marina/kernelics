# Employees CRUD Application

This projects consists of 2 repositories:

- server
- client

## How to run application

1. Install globally last versions of `yarn` and `node` packages
2. Run server application from the root repository

```bash
cd server
yarn run dev
```
3. Run client application from the root repository

```bash
cd client
yarn run dev
```

4. Open `localhost:5173` in your browser (the server is running on `3001` port)

## What was implemented

- The page displays a list of all employees
- The list of employees is available for filtering by name and status
- The filter can be reset
- The status of any employee can be changed
- A new employee can be added by clicking the **Create** button and filling in the data in the modal window form
- Media queries have been added to improve responsiveness