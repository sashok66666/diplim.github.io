const  searchResult = () => {
        const cardList = document.querySelector('.card-list');
        if (cardList.childElementCount > 0) {
            document.querySelector('.search-results').classList.remove('search-result_disable');
            document.querySelector('.nothing-found').classList.add('critical-case_disable');
            document.querySelector('.main__button').classList.remove('main__button_disable')
        } else if(cardList.childElementCount == 0){
            document.querySelector('.search-results').classList.add('search-result_disable');
            document.querySelector('.nothing-found').classList.remove('critical-case_disable')
            document.querySelector('.main__button').classList.add('main__button_disable')
        } 
}
export default searchResult;