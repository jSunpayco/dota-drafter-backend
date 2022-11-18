# DOTA Drafter

Note: This is a personal project in progress. Currently, a live demo is deployed on [Stackblitz](https://react-ts-edg7pj.stackblitz.io), but will soon be migrated to a different platform in order for users to access the application without having to run in on their machines. Readme will be updated regularly.

This is a web application developed to simulate Captains Mode, a set of rules in the video game DOTA 2. The feature replicated from the game is when two team leaders take turns picking and banning one character from a list of 100+ within a specified time limit.

The frontend is written in [ReactJS](https://reactjs.org/), whereas [MantineUI](https://mantine.dev/) was also used for some html components. [OpenDota API](https://docs.opendota.com/) was initially used to retrieve character information.

## Running the app

Local:

Go to the main directory of the project and open command line to enter the following commands to run the backend:

```sh
npm install
npm run server
```

Open a separate terminal and enter the following to run the frontend:

```sh
npm install
npm start
```

Your default browser will then open up and automatically direct to localhost:3000.

To stop the application from running, you may enter ctrl+c on both command lines. (cmd+c for Mac).

### `Description of commands:`

### `npm install`

Installs the required packages and dependencies

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
