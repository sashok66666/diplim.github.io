const  searchError = () => {
        const arrayNews = JSON.parse(localStorage.getItem('news'));
        
        if (arrayNews.length > 0) {
             document.querySelector('.nothing-found').classList.add('critical-case_disable');
        } else if(arrayNews.length === 0){
            document.querySelector('.nothing-found').classList.remove('critical-case_disable') 
        } 
}
export default searchError;