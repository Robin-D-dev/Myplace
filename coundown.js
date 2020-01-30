import React,{Component} from 'react';

let dumCount= new Date("feb 1, 2020 00:00:00").getTime();
let dNow = new Date().getTime();
let dDistance = dumCount-dNow;
let dDay = Math.floor( (dDistance)/ (1000 * 60 * 60 * 24))
let dHours = Math.floor((dDistance)% (1000 * 60 * 60 * 24)/(1000*60*60))
let dMins = Math.floor((dDistance)% (1000 * 60 * 60 )/(1000*60))
let dSecs = Math.floor((dDistance)% (1000 * 60 )/(1000))
if(dDay<=9){
    dDay='0'+dDay;
}
if(dHours<=9){
    dHours='0'+dHours;
}
if(dMins<=9){
    dMins='0'+dMins;
}
if(dSecs<=9){
    dSecs='0'+dSecs;
}
class CountDown extends Component{
  
    state={
        countDownDate :dumCount,
        now:dNow,
        distance:dDistance,
        days :dDay,
        hrs:dHours,
        mins:dMins,
        secs: dSecs
    };

    componentWillMount(){

     setInterval(() => {
        
let dumCount= new Date("feb 1, 2020 00:00:00").getTime();
let dNow = new Date().getTime();
let dDistance = dumCount-dNow;
let dDay = Math.floor( (dDistance)/ (1000 * 60 * 60 * 24))
let dHours = Math.floor((dDistance)% (1000 * 60 * 60 * 24)/(1000*60*60))
let dMins = Math.floor((dDistance)% (1000 * 60 * 60 )/(1000*60))
let dSecs = Math.floor((dDistance)% (1000 * 60 )/(1000))
let dDayZero,dHoursZero,dMinsZero,dSecsZero=0;


if(dDay<=9){
    dDayZero='0'+dDay;
}else{
    dDayZero=dDay;
}
if(dHours<=9){
    dHoursZero='0'+dHours;
}else{
    dHoursZero=dHours;
}
if(dMins<=9){
    dMinsZero='0'+dMins;
}else{
    dMinsZero=dMins;
}
if(dSecs<=9){
    dSecsZero='0'+dSecs;
}else{
    dSecsZero=dSecs;
}


this.setState({
    countDownDate :dumCount,
    now:dNow,
    distance:dDistance,
    days :dDayZero,
    hrs:dHoursZero,
    mins:dMinsZero,
    secs:dSecsZero})
        
     }, 1000);
    }

render(){
    return( <div className="date">
    <div className="day">{this.state.days}</div>
    <div id="days">Days</div>
    <div className="hr">{this.state.hrs}</div>
    <div className="min">{this.state.mins}</div>
    <div className="sec">{this.state.secs}</div>
    <div className="caption">
    <span>Hrs</span>
    <span>Mins</span>
    <span>Secs</span>
    </div>
</div>)
}
}
export default CountDown