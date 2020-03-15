const resetCards = () => {
    const cardList = document.querySelector('.card-list');
    while(cardList.firstChild){
        cardList.removeChild(cardList.firstChild);
    }
}
export default resetCards;