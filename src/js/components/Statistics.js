class Statistics {
    constructor(value){
        this.value = value;
    }
    ask(){
        const value = this.value
        console.log(value);
        document.querySelector('.header__result').textContent = 'Вы спросили: '+ `${value}`; 
    }
    analytics(){
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <div class="analytics__day">
                <div class="analytics__number"></div>
                <div class="analytics__quantity" style="width: calc(15% - 6px);"></div>
            </div>`;
        card.querySelector(".analytics__number").style.backgroundImage = `url(${array.urlToImage})`;  
        card.querySelector(".analytics__quantity").textContent = date(array.publishedAt);
        card.querySelector(".analytics__quantity").textContent = array.title;
        return card;
    }
    array(){
        let arrayNews = JSON.parse(localStorage.news)
        function getWeekDay(date) {
            let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
          
            return days[date.getDay()];
          }
        let dates = arrayNews.map(function(item){
            const date = new Date(item.publishedAt)
            const arrDate = [];
            const weekDay = getWeekDay(date);
            const num = date.getDate();
            arrDate.push(num);
            arrDate.push(weekDay)  ;
            return  arrDate
        });
        
        localStorage.setItem('dates',JSON.stringify(dates))
    }
    analytics(){
        let dates = JSON.parse(localStorage.dates)
        
      
     const  occurrences = dates.reduce(function(obj, item) {
        obj[item] = (obj[item] || 0) + 1;
        return obj;
      }, {}); console.log(occurrences)
    }
  
}

const statistics = new Statistics(localStorage.value)
statistics.ask()
statistics.array()
statistics.analytics()
export default Statistics;
