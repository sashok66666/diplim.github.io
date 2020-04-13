import NewsApi from "../modules/NewsApi";
import render from "./NewsCardList";
import preloader from "../utils/preloader";
import resetCards from "../utils/resetCards";
import value from '../utils/submit';
import searchError from '../utils/searchError';
import dates from '../utils/date';

const newsApi = new NewsApi(dates,value);

class SearchInput {
    constructor(newsApi,render,preloader,resetCards,searchError){
        this.newsApi = newsApi;
        this.render = render;
        this.preloader = preloader;
        this.resetCards = resetCards;
        this.searchError = searchError;
    }
    submission(){
        this.resetCards();
        this.preloader();
        this.newsApi.getNews()
            .then((data) =>{
                console.log(data)
               // localStorage.setItem('value', newSapi);
                localStorage.setItem('totalResults',JSON.stringify(data.totalResults))
                localStorage.setItem('news',JSON.stringify(data.articles))
                this.render();
                this.preloader();
            })
            .then(()=>{
                this.searchError()
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

const searchInput = new SearchInput(newsApi,render,preloader,resetCards,searchError);

document.querySelector('.header__form').addEventListener('submit',function(event){
    event.preventDefault();
    searchInput.submission()
})
document.querySelector('.main__button').addEventListener('click',function(){
    render();
  })

export default SearchInput