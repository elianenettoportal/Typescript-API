// in this modle we instanciate all routers of the server
/**
 *  
    1) https://developer.github.com/v3
    2) https://developer.github.com/v3/users
    3) https://developer.github.com/v3/repos/
    routers:
    GET - /api/users?since={number}
    https://api.github.com/users
    GET - /api/users/:username/details
    https://api.github.com/users/elianenettoportal
    GET - /api/users/:username/repos
    https://api.github.com/users/elianenettoportal/repos
 */
import express from 'express';
import { main } from './main';
import { user } from './user';

export const routes = express.Router();

routes.use(main);
routes.use(user);