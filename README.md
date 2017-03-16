
### 说明
* 获取指定间隔的工作日日期信息
* 非工作日仅周六日，其它节日未考虑

### Install
```javascript
npm install --save pull-workday
```

### Use
```javascript
// import pull-workday
import pullWorkday from 'pull-workday'


// 获取第七个工作日的日期信息
let startDate = new Date();
console.log(startDate);
// Thu Mar 16 2017 21:12:45 GMT+0800 (中国标准时间)

let endDate = pullWorkday(startDate, 7);
console.log(endDate);
// Fri Mar 24 2017 21:12:45 GMT+0800 (中国标准时间)

```
