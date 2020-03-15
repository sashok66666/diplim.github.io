import CommitCard from "./CommitCard";

const createCommitCard = (array) => new CommitCard(array);
class CommitCardList {
    constructor(container, createCard) {
        this.container = container;
        this.createCard = createCard;
    }
    render() {
      const addCard = this.addCard.bind(this);
      let arrayNews = JSON.parse(localStorage.commits);
      arrayNews.forEach(function(item,i,arr){
       
          addCard(item);

      })
    }
    
    addCard(array) {
        const {createElement}  = this.createCard(array);
        this.container.appendChild(createElement);
    }
  }
  const commitCardList = new CommitCardList(document.querySelector('.glide__slides'),createCommitCard);
  const render = commitCardList.render.bind(commitCardList);

    
    export default render ;
  
  
  
  