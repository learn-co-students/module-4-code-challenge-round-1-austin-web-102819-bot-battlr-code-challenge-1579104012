import React from "react";
import BotsCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";


class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super();
    this.state = { 
      allBots: [], 
      selectedBot: []
    };
    
  }




  componentDidMount() {
    fetch(" https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(response => response.json())
      .then(data => this.setState({ 
            allBots: data
       }));
  }

  addRobotToArmy = (robot) => {
      // console.log(robot)
      // this.setState(prevState => ({
      //   selectedBot: [...prevState.selectedBot, robot]
      // }));
    let b = this.state.selectedBot.some(bot => bot.id === robot.id)

    if(!b)
      this.setState({
        selectedBot: [robot, ...this.state.selectedBot]
      })

  }


  removeRobot = (robot) => {
   
    let x = this.state.selectedBot.filter( bot=> bot.id !== robot.id )
    this.setState({
      selectedBot : x
    })

  }

  render() {
    return (
      <div>
        {<YourBotArmy selectedBot ={this.state.selectedBot} removeRobot ={this.removeRobot} />}
        {<BotsCollection addRobotToArmy= {this.addRobotToArmy} allBots ={this.state.allBots}/>}
        
      </div>
    );
  }

}

export default BotsPage;
