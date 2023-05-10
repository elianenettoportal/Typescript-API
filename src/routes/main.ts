//main router will only inform if the server is up to running 
import { Router } from 'express';

export const main = Router();

main.get('/', (request, response) => {
   response.send('I am Health!');
});

  
  