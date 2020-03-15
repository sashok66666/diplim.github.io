import render from "../components/CommitCardList"
class GithubApi {
    constructor() {
     
      
    }
    getCommits() {
      
     
      fetch('https://api.github.com/repos/sashok66666/diplim.github.io/commits')
        
      .then(res => {
          if (res.ok){
            return res.json() ;
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((result) => {
            localStorage.setItem('commits',JSON.stringify(result))
        })
        .catch((err) => {
          console.log(err);
        });
    }
}

const githubApi = new GithubApi
githubApi.getCommits();
export default GithubApi;