import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";
class BotsPage extends React.Component {
  //start here with your code for step one

  state= {
    bots: [],
    selectedBots: [],
    isSelected: false
    
  }

  addToArmy = (bot) => {
    console.log(">>>> this works")
    const newArmyArray= this.state.selectedBots.concat(bot)
    this.setState({
      selectedBots: newArmyArray,
      isSelected: !this.state.isSelected
    })
    this.state.selectedBots.includes(bot) ? this.state.selectedBots.splice(0, bot) : null;
  }
  // I tried creating a separate event handler to handle clicking the card component from YourBotArmy, 
  // but I couldn't figure out how to give a component 2 event listeners (or if that's even possible)
  removeFromArmy = (bot) => {
    const newSelectedBots= this.state.selectedBots.splice(0,bot)
    this.setState({
      selectedBots: newSelectedBots
    })
    
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
        <YourBotArmy botArmy={this.state.selectedBots} isSelected={this.state.isSelected} addToArmy={this.removeFromArmy}  />
        <BotCollection bots={this.state} addToArmy={this.addToArmy} />
      </div>
    );
  }

}

export default BotsPage;
