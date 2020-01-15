import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
 constructor(){
	 super()
	 this.state = {
		 display : false,
		 clickedBot: {}
	 }
 }


clicked = (robot) => {

	this.setState(prevState => ({
		display: !prevState.display, 
		clickedBot : robot
	  }));
}





  render(){
	//   console.log(this.props.allBots)
  	return this.state.display === false ?(
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.allBots.map(bot => <BotCard bot = {bot} key = {bot.id} handleRobotEvent = {this.props.addRobotToArmy} clicked = {this.clicked}/>)}
    		  Collection of all bots
    		</div>
  	  </div>
	  ): (
		  <BotSpecs bot = {this.state.clickedBot} clicked = {this.clicked} handleRobotEvent = {this.props.addRobotToArmy}/>
	  )
	  


  }

};

export default BotCollection;
