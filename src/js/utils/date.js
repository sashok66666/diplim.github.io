function dtime_nums() {
    const dates = {};
    const now = new Date;
    let toDay = now.toISOString();
    now.setDate(now.getDate() - 7);
    let weekAgo = now.toISOString();

    const reg = /(\d+)-(\d+)-(\d+)/;
    console.log() ;

    dates.toDay = toDay.match(reg)[0];
    dates.weekAgo = weekAgo.match(reg)[0];
    return dates ;
  }
  const dates = dtime_nums();


  export default dates;
  
  
 


