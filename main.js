import React ,{Component}from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CountDown from './coundown';

class Main extends Component{

render(){
    return (
    <div>
     <div className="container" >
    <div className="row">
        <div className="heading1">Launching soon!</div>
    </div>
   <div className="row">
   <div className="col-sm-3 col-md-6 col-lg-6 col-xl-6">
       <CountDown/>
    </div>
    <div className="col-sm-3 col-md-6 col-lg-6 col-xl-6 ads">
        <div className="add-contain">
            <div id="logo1" className="ads1">
                <img src={require("./Aspiricx-Logo.svg")} alt="Aspiricx Logo"/>
            </div>
            <div id="logo2" className="ads1">
                <img src={require("./Layer1.svg")} alt="lanevision-img"/>
            </div>
            <div id="text1" className="ads1">
                <p>Unlock your true potential by giving yourself every opportunity to succeed. LaneVision provides you the feedback that only the top 1% of swimmers currently have access to.</p>
                <p>This information will help you make quick adjustments for upcoming races or set long term goals in training. Use LaneVision to track your progress over time by simply storing and analyzing your data.</p>
            </div>
            <div id="appstore">
                <img src={require("./App-store-buttons.svg")} alt="App-store-img"/>
            </div>
            <div id="skip"><img src={require("./Skip.png")}/></div>
        </div>
    </div>
   </div>
   <div className="row">
       <div id="devices">
           <img src={require("./Group24.svg")} alt="Different-devices"/>
       </div>

   </div>
   
</div>
</div>
  );
}}

export default Main;
