import CommitCard from "./CommitCard";

const createCommitCard = (array) => new CommitCard(array);

class CommitCardList {
    constructor(container, createCard) {
        this.container = container;
        this.createCard = createCard;
    }
    render(arr) {
      const addCard = this.addCard.bind(this);
      arr.forEach(function(item,i,arr){
           return addCard(item);
      })
    }
    
    addCard(array) {
        const {createElement}  = this.createCard(array);
        this.container.appendChild(createElement);
    }
  }
  const commitCardList = new CommitCardList(document.querySelector('.glide__slides'),createCommitCard);


  export default commitCardList ;
  
  
  
  