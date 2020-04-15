function dtimeNums() {
    const dates = {};
    const now = new Date;
    const toDay = now.toISOString();
    now.setDate(now.getDate() - 6);
    const weekAgo = now.toISOString();

    const reg = /(\d+)-(\d+)-(\d+)/;
    

    dates.toDay = toDay.match(reg)[0];
    dates.weekAgo = weekAgo.match(reg)[0];
    return dates ;
  }
  const dates = dtimeNums();


  export default dates;
  
  
 


