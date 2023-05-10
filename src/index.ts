// Framework Javascript for NodeJS applications
import express from 'express';
//library to load environment variables from a .env file to separete important information from the codebase
import dotenv from 'dotenv';
// internal module with all routers
import { routes } from './routes/routers';

//cors library to configure alowed origins requests throughtout this server
import cors from 'cors';

dotenv.config();

//instanciate experss 
const app = express();

//configure the PORT from the .env file
// env file will not be in the production, this var will be replaced by heroku port after deploy
const port = process.env.PORT;

// CORS - Add a list of allowed origins.
const origins = process.env.ALLOWED_ORIGINS;
const allowedOrigins = [`${origins}`];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options)); //this will force only allowed origins to access BE
//app.use(cors()); // for this project since it is a learning process i will keep it empty allowing all

// routes
app.use('/', routes);

// start the server
app.listen(port, () => {
  console.log(`HTTP Server running at PORT', ${port}!`);
});