import dates from '../utils/date';
import value from '../utils/submit'
import render from '../components/NewsCardList';

class NewsApi {
    constructor(dates,newSapi,render) {
      this.dates = dates;
      this.newSapi = newSapi;
      
    }
    getNews() {
      
      const newSapi = this.newSapi();
      fetch(`${newSapi.baseUrl + newSapi.language +'&'+ newSapi.pageSize+'&q='+ newSapi.value +'&from7-03-2020'+'&to14-03-2020'+'&'+ newSapi.apiKey}`)
        
      .then(res => {
          if (res.ok){
            return res.json() ;
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
        .then((result) => {
          localStorage.setItem('news',JSON.stringify(result.articles))
        })
        .catch((err) => {
          console.log(err);
        });
    }
}


const newsApi = new NewsApi(dates,value);
const getNews = newsApi.getNews.bind(newsApi);  


 


document.querySelector('.main__button').addEventListener('click',function(){
  

  render();
})



export default getNews;