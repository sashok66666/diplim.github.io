import commitCardList from "../components/CommitCardList";
import glide from "../utils/glide";
const renderCommitsCard =  (arr) => commitCardList.render(arr);
const glideActive = () => glide.mount();
class GithubApi {
    constructor(render,glide) {
     this.render = render;
     this.glide = glide;
     console.log(this.glide)
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
           this.render(result)
           return Promise.resolve(this.glide())
             
        })
        
     
        .catch((err) => {
          console.log(err);
        });
    }
}

const githubApi = new GithubApi(renderCommitsCard,glideActive);

export default githubApi;



  