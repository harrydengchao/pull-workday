module.exports = (date, num) => {
  // date: 时间格式 Thu Mar 16 2017 17:28:22 GMT+0800 (中国标准时间)
  // num: 天数 7
  // return 时间格式
  let endDate = date;
  let isWorkday = nowDate => {
    let afterDate = new Date(nowDate.getTime() + 1 * 24 * 60 * 60 * 1000);
    let regWorkday = /[1-5]/;
    return regWorkday.test(afterDate.getDay());
  }
  let cond = 1;
  let cnt = 0;
  while (cond) {
    cond++;
    if (isWorkday(endDate) ) {
      cnt++;
      if (cnt === num) {
        endDate = new Date(date.getTime() + cond * 24 * 60 * 60 * 1000);
        break;
      }
    }
  }
  return endDate
}
