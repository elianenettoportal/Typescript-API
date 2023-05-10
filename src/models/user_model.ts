  
  export default class User {

    private _id: number;
    private _login: string;
    private _profile_url: string;
    private _created_at: Date;

    constructor(id: number, login: string, url: string, date: Date) {
        this._id = id;
        this._login =login;
        this._profile_url=url;
        this._created_at= date;
    }   
    
    get id() {
        return this._id;
    }

    set id(val: number) {
        this._id = val;
    }

    get login() {
        return this._login;
    }

    set login(val: string) {
        this._login = val;
    }

    get profileurl() {
        return this._profile_url;
    }

    set profileurl(val: string) {
        this._profile_url = val;
    }

    get createdat() {
        return this._created_at;
    }

    set password(val: Date) {
        this._created_at = val;
    }
}