const div = document.querySelector("div");
setInterval(() => {
  let nowDate = new Date();

  let endDate = new Date("Sun Sep 30 2018 18:03:30 GMT+0800 (中国标准时间)");

  let totalSec = Math.ceil((endDate.getTime() - nowDate.getTime()) / 1000);

  let hour = Math.floor(totalSec / 60 / 60);
  let min = Math.floor((totalSec - hour * 60 * 60) / 60);
  let sec = totalSec - hour * 60 * 60 - min * 60;

  let time = hour + " : " + min + " : " + sec;

  console.log(time);
  div.innerHTML = time;
}, 1000);
