function dtime_nums() {
    const dates = {};
    const now = new Date;
    const toDay = now.toLocaleDateString();
    now.setDate(now.getDate() - 7);
    dates.toDay = toDay;
    dates.weekAgo = now.toLocaleDateString()
    return dates ;
  }
  const dates = dtime_nums();
  export default dates;
  
 


