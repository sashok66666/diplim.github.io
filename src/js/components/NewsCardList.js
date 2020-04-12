import NewsCard from "./NewsCard";

const createNewsCard = (array) => new NewsCard(array);
class NewsCardList {
    constructor(container, createCard) {
        this.container = container;
        this.createCard = createCard;
    }
    render() {
      const addCard = this.addCard.bind(this);
      const arrayNews = JSON.parse(localStorage.getItem('news'));
      arrayNews.forEach(function(item,i,arr){
        if (i<3) {
          addCard(item);
          arr.splice(0,1)
          localStorage.setItem('news',JSON.stringify(arr))
        } 
      })
    }
    
    addCard(array) {
        const {createElement}  = this.createCard(array);
        this.container.appendChild(createElement);
    }
  }
  const newsCardList = new NewsCardList(document.querySelector('.card-list'),createNewsCard);
  const render = newsCardList.render.bind(newsCardList);

    
    export default render ;
  
  
  
  