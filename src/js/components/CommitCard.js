import date from "../utils/date";

class CommitCard {
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
      const card = document.createElement("li");
      card.classList.add("glide__slide");
      card.insertAdjacentHTML("afterBegin",`
      <div class="commit">
            <p class="commit__time"></p>
            <div class="commit__info">
                <img  alt="Avatar" class="commit__img">
                <div class="commit__data">
                    <h2 class="commit__name"></h2>
                    <p class="commit__email"></p>
                </div>
            </div>
            <p class="commit__text"></p>
      </div>`);
      card.querySelector(".commit__time").textContent = date(array.commit.committer.date);  
      
      
     // card.querySelector(".commit__img").setAttribute('src',array.author.avatar_url);
      card.querySelector(".commit__name").textContent = array.commit.committer.name;
      card.querySelector(".commit__email").textContent = array.commit.committer.email;
      card.querySelector(".commit__text").textContent = array.commit.message;
      return card;
    };
  }
   export default CommitCard;