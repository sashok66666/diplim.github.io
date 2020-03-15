import getNews from "../modules/NewsApi";
import render from "./NewsCardList";
import searchResult from "../utils/search-result";
import preloader from "../utils/preloader";
import resetCards from "../utils/resetCards";
class SearchInput {
    constructor(getNews,render,searchResult,preloader,resetCards){
        this.getNews = getNews;
        this.render = render;
        this.searchResult = searchResult;
        this.preloader = preloader;
        this.resetCards = resetCards;
    }
    submission(){
        localStorage.removeItem('news')
        this.resetCards();
        this.getNews();
        this.preloader();
        setTimeout(this.render,2000);
        setTimeout(this.searchResult,2000);
    }
}

const searchInput = new SearchInput(getNews,render,searchResult,preloader,resetCards);
document.querySelector('.header__form').addEventListener('submit',function(event){
    event.preventDefault();
    searchInput.submission()
    
})

export default SearchInput