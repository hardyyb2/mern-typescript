# Getting Started

## MERN Typescript (mern-typescript)

## About Project -

- redux for client and database config for server are already setup
- Technologies used -
  - Client
    - React
    - Redux
    - Typescript
  - Server
    - Node.js
    - MongoDB
    - Typescript
- Other Packages used -

  - client
    - react-redux
    - redux
    - redux-thunk
    - redux-logger
    - react-router-dom
    - axios
    - typescript
  - server

    - express
    - chalk
    - cors
    - dotenv
    - mongoose
    - morgan
    - nodemon
    - ts-node
    - typescript
    - @types/[used-packages]

  - concurrently

## Get Started

### (All steps from root)

- Rename **.env.example** to **.env** in client/ and server/
- Install dependencies using (from root)
  - **yarn install-all** or **npm install-all**
- Start the app (from root)
  - **yarn start** or **npm start**
- Project runs live on http://localhost:3000 (client), http://localhost:3001 (server) [based on .env file config]

<br />

## Contributing

For contributing to this repo, follow the guidelines mentioned in [react-templates CONTRIBUTING.md](https://github.com/hardyyb2/react-templates/blob/main/CONTRIBUTING.md)

## Available Scripts (from root)

In the project directory, you can run:

### `yarn start`

1. - Runs the app (client) in the development mode.\
     Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   - The page will reload if you make edits.\
     You will also see any lint errors in the console.

2. - Buils the server repo to javascript and runs the app(server) in development mode on [http://localhost:3001](http://localhost:3001).

### `yarn dev`

1. - Same as `yarn start` but along with changes in client reflecting on page, changes in server also reload the server (using nodemon, does not build the app)
