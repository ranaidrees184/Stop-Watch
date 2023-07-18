let time= document.querySelector("#time");
let startbtn= document.querySelector("#startbtn");
let pausebtn= document.querySelector("#pausebtn");
let resetbtn= document.querySelector("#resetbtn");


let startTime=0;
let elapsedTime=0;
let currentTime=0;
let paused=true;
let intervalId;
let hrs=0;
let mins=0;
let sec=0;

startbtn.addEventListener("click",()=>{
    if(paused)
    {
        paused=false;
        startTime=Date.now()-elapsedTime;
        intervalId=setInterval(updateTime,75);
    }
});

pausebtn.addEventListener("click",()=>{
    if(!paused)
    {
        paused=true;
        elapsedTime=Date.now()-startTime;
        clearInterval(intervalId);
    }
    });

resetbtn.addEventListener("click",()=>{ 
    paused=true;
    clearInterval(intervalId);
   startTime=0;
  elapsedTime=0;
  currentTime=0;
  paused=true;
  intervalId;
  hrs=0;
  mins=0;
  sec=0;
  time.textContent=`00 :  00 : 00`;
});


function updateTime(){
    elapsedTime=Date.now()- startTime;

    sec=Math.floor((elapsedTime/1000)%60);
    mins=Math.floor((elapsedTime/(1000*60))%60);
    hrs=Math.floor((elapsedTime/(1000*60*60))%60);
   sec= zero(sec);
    mins=zero(mins);
    hrs=zero(hrs);

    function zero(unit)
    {
        //  return ((unit.length)<=1?`unit`:`0${unit}`);
        return(("0")+ unit).length > 2? unit: `0${unit}`;
    }

    time.textContent=`${hrs} : ${mins} : ${sec}`;

}


