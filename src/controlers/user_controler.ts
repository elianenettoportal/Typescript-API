
import User from '../models/user_model';

function userDetails(user: User) {
    return {id: user.id, login: user.login, profileurl :user.profileurl, createdat:user.createdat};
}

export function createUser(thisObject: any){
    let {login, id, html_url, created_at} = thisObject;
    let newUser = new User(id, login, html_url,created_at);
    return userDetails(newUser);
}

export function createUsers(theseObjects: [any]){
    let users=[];
    for(let repObj of theseObjects){
        let {id, login, html_url, created_at} = repObj;
        let newUser = new User(id, login, html_url, created_at);
        users.push(userDetails(newUser));
    }
    return users;
}

  