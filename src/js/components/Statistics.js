class Statistics {
    constructor(value){
        this.value = value;
    }
    ask(){
        const value = this.value
        const totalResults = JSON.parse(localStorage.getItem('totalResults'))
        const mentions = JSON.parse(localStorage.getItem('news')).length
        document.querySelector('.header__result').textContent = 'Вы спросили: '+ `${value}`; 
        document.querySelector('.requests').textContent = totalResults; 
        document.querySelector('.mentions').textContent = mentions; 
    }

    array(){
        const arrayNews = JSON.parse(localStorage.getItem('news'))
        new Promise((resolve,reject)=>{
            function getWeekDay(date) {
                const days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
                return days[date.getDay()];
              }
            const  dates = arrayNews.map(function(item){
                const date = new Date(item.publishedAt)
                const arrDate = [];
            const weekDay = getWeekDay(date);
            const num = date.getDate();
            arrDate.push(num);
            arrDate.push(weekDay)
            return  arrDate
                });
                resolve(dates)
        }) .then((dates)=>{
            
            const resultReduce = dates.reduce(function(acc, cur) {
           
                if (!acc.hash[cur]) {
                
                  acc.hash[cur] = { [cur]: 1 };
                  acc.map.set(acc.hash[cur], 1);
                  acc.result.push(acc.hash[cur]);
                } else {
                  acc.hash[cur][cur] += 1;
                  acc.map.set(acc.hash[cur], acc.hash[cur][cur]);
                }
                return acc;
              }, {
                hash: {},
                map: new Map(),
                result: []
              });
              return resultReduce.result
        }) 
        .then((result)=>{
            
            const sortResultReduce = result.sort(function(a, b) {
    
                const reg = /(\d+)/;
                const keysA = Object.keys(a).join().match(reg)
                const keysB = Object.keys(b).join().match(reg)
               return keysA[0] - keysB[0];
           });
           
           return sortResultReduce
        })  
        .then((result)=>{
            
            result.forEach((item)=>{
                const card = document.createElement("div");
                card.classList.add("analytics__day");
                card.insertAdjacentHTML("afterBegin",`
                    <div class="analytics__number"></div>
                    <div class="analytics__quantity" style="width: calc(15% - 6px);"></div>
                </div>`) ;
                card.querySelector(".analytics__quantity").style.width = `calc(${Object.values(item)}% - 6px)`;  
                card.querySelector(".analytics__quantity").textContent = Object.values(item);
                card.querySelector(".analytics__number").textContent = Object.keys(item);
                return document.querySelector('.analytics__days').appendChild(card);
                 
            })   
        })
    }
}

const statistics = new Statistics(localStorage.value)
statistics.ask()
statistics.array()


