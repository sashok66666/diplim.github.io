import dates from '../utils/date';
class NewsApi {
    constructor(dates,newSapi) {
      this.dates = dates;
      this.newSapi = newSapi;
      
    }
    getNews() {
      const newSapi = this.newSapi();
      return  fetch(`${newSapi.baseUrl + newSapi.language +'&'+ newSapi.pageSize+'&q='+ newSapi.value +'&from='+dates.weekAgo+'&to='+dates.toDay+'&sortBy=popularity'+'&'+ newSapi.apiKey}`)
        
      .then(res => {
          if (res.ok){
            return res.json() ;
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        });
    }
}

export default NewsApi;