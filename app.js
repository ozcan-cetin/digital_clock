
// setInterval(
//     function digital_time () {
//         const clock = document.querySelector(".clock");
//         let hour = new Date().getHours();
//         let minute = new Date().getMinutes();
//         let second = new Date().getSeconds();

//         hour < 10 ? hour = "0"+ hour : hour;
//         minute < 10 ? minute = "0"+ minute : minute;
//         second < 10 ? second = "0"+ second : second;
//         clock.innerText = `${hour} : ${minute} : ${second}`
//     },1000
// );

//! ************
setInterval(()=>{
    let clock=document.querySelector(".clock");
    let time=new Date().toLocaleTimeString();
    clock.innerText=time;
})
