import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";
class BotsPage extends React.Component {
  //start here with your code for step one

  state= {
    bots: [],
    selectedBots: [],
    isInArmy: false
    
  }

  addToArmy = (bot) => {
    console.log(">>>> this works")
    const newArmyArray= this.state.selectedBots.concat(bot)
    this.setState({
      selectedBots: newArmyArray,
      isInArmy: !this.state.isInArmy
    })
    this.state.selectedBots.includes(bot) ? this.state.selectedBots.splice(0, bot) : null;
  }

  removeFromArmy = (bot) => {
    console.log(">>> This works");
    
  }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            bots: data
          },

          () => {
            console.log(this.state);
          }
        );
      });
  }


  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy botArmy={this.state.selectedBots} removeFromArmy={this.removeFromArmy} />
        <BotCollection bots={this.state} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
