 
  export default class Repository {

    private _id: number;
    private _name: string;
    private _repo_url: string;

    constructor(id: number, name: string, url: string) {
        this._id = id;
        this._name =name;
        this._repo_url=url;
    }   
    
    get id() {
        return this._id;
    }

    set id(val: number) {
        this._id = val;
    }

    get name() {
        return this._name;
    }

    set name(val: string) {
        this._name = val;
    }

    get repourl() {
        return this._repo_url;
    }

    set repourl(val: string) {
        this._repo_url = val;
    }
}