import { Router } from 'express';
import {createUsers, createUser} from '../controlers/user_controler';
import createRepositoy from '../controlers/repos_controler';
import dotenv from 'dotenv';

export const user = Router();

dotenv.config();
const giturl = process.env.GIT_URL;

// GET - /api/users?since={number}
user.get('/api/users/', async (request, response) => {
    const since = request.query.since || 0; 
    let success = false;
    let data;   
    const fetch_all_users = fetch(`${giturl}?since=${since}`)
        .then(response => response.json())
        .then(data => {
            return data;
        }).catch(error => {
            console.error('Error fetching data:', error);
            return [];
        });
    try{
        let users = await fetch_all_users;
        success= true;
        data = createUsers(users);
    }catch(Err){
        console.error('An Error Happened - fetch_all_users:', Err);
        success= false;
        data= 'An Error Happened';
    }
    response.json({success: success, users_length: Object.keys(data).length, users: data});
});

// GET - /api/users/:username/details
user.get('/api/users/:username/details', async (request, response) => {
    const username = request.query.username; 
    let success = false;
    let data;   
    const fetch_user_details= fetch(`${giturl}/${username}`)
        .then(response => response.json())
        .then(data => {
            return data;
        }).catch(error => {
            console.error(`Error fetching data: ${giturl}/${username}`, error);
            return null;
        });
    try{
        let userDetails = await fetch_user_details;
        success= true;
        data = createUser(userDetails);
    }catch(Err){
        console.error('An Error Happened - fetch_user_details:', Err);
        success= false;
        data= 'An Error Happened';
    }
    response.json({success: success,user_details: data});
});
  
// GET - /api/users/:username/repos
user.get('/api/users/:username/repos', async (request, response) => {
    const username = request.params.username; 
    let success = false;
    let data;   
    const fetch_user_repositories= fetch(`${giturl}/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            return data;
        }).catch(error => {
            console.error(`Error fetching data: ${giturl}/${username}/repos`, error);
            return null;
        });
    try{
        let repositories = await fetch_user_repositories;
        success= true;
        data= createRepositoy(repositories);
    }catch(Err){
        console.error('An Error Happened - fetch_user_repositories:', Err);
        success= false;
        data= 'An Error Happened';
    }
    response.json({success: success,repos_length: Object.keys(data).length, user_repos: data});
});
  