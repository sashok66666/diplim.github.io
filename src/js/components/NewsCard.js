class NewsCard {
  constructor(array) {
    this.createElement = this.create(array);
  }
  date(str){
    const date = new Date(str)
        const options = {  
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        };
   return date.toLocaleString("ru", options) 
}
  create(array) {
    const date = this.date.bind(this);
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div  class="card__img"></div>
        <div class="card__text">
            <p class="card__time"></p>
            <h2 class="card__title"></h2>
            <p class="card__info"></p>
            <p class="card__sourse"></p>
        </div>`;
    card.querySelector(".card__img").style.backgroundImage = `url(${array.urlToImage})`;  
    card.querySelector(".card__time").textContent = date(array.publishedAt);
    card.querySelector(".card__title").textContent = array.title;
    card.querySelector(".card__info").textContent = array.description;
    card.querySelector(".card__sourse").textContent = array.source.name;
    return card;
  };
}
 export default NewsCard;