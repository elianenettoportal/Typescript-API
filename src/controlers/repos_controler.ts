
import Repository from '../models/repos_model';

function repositoryDetails(repos: Repository) {
    return {id: repos.id, login: repos.name, reposurl :repos.repourl};
}
function createRepository(theseObjects: [any]){
    let repos=[];
    for(let repObj of theseObjects){
        let {name, id, url} = repObj;
        let newRepository = new Repository(id, name, url);
        repos.push(repositoryDetails(newRepository));
    }
    return repos;
}
export default createRepository;
  