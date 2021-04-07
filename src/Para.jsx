import React ,{useState} from 'react';


function Para(){
    let t=new Date();
    const [Ctime,setCtime]=useState(t);
    const updateTime=()=>{
        const t=new Date();
        setCtime(t);
    }
    setInterval(updateTime,1000);

let good="Good ";
let time=t.getHours();
let mint=t.getMinutes();
let sec=t.getSeconds();
let day=t.getUTCDay();
if(day<10) day="0"+day;
let month=t.getUTCMonth();
if(month<10) month="0"+month;
let year=t.getUTCFullYear();
let apm;
let greeting;
let cssStyle={};

if(time>1 && time<12){
    //good="springgreen";
    apm="AM";
    greeting="Morning!";
    cssStyle.color="deeppink";
}else if(time>=12 && time<13){
    apm="PM";
    greeting="Afternoon!";
    cssStyle.color="orange";
}else if(time>=13 && time<19){
    apm="PM";
    
    greeting="Evening!";
    cssStyle.color="Red";
}else {
    apm="PM";
    greeting="Night!";
    cssStyle.color="darkblue";
}
let h=time;

     if(h>=12) {
           h=h%12;
           if(h>10)
               h=h;
            else
              h="0"+h;
        }  
    else if(h<12 && h>=10) {
              h=h;
      }
      else h="0"+h;
     if(mint<10) mint="0"+mint;
     if(sec<10) sec="0"+sec;
     time=h;
    return <>
            <div className="greet">
                <h1><span style={{color:"darkred"}}>{good}</span><span style={cssStyle}>{greeting}</span></h1>
                <p className="date">🙏<span style={{color:"midnightblue"}}>R</span><span style={{color:"lightcoral"}}>A</span><span style={{color:"goldenrod"},{fontFamily:"-moz-initial"}}>M</span>🙏</p>
                <p className="date"><span style={{color:"lightcoral"}}>{day}</span>/<span style={{color:"goldenrod"}}>{month}</span>/<span style={{color:"midnightblue"}}>{year}</span></p>
                <div className="timezone">
                    <h4><span style={{color:"skyblue"}}>{time}</span>:<span style={{color:"crimson"}}>{mint}</span>:<span style={{color:"green"}}>{sec}</span>{apm}</h4>
                </div>
            </div>
           </>
}


export default Para;



