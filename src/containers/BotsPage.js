import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {
  state = {
    bots: [],
    enlistedBots: []
  };

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(bots => this.setBots(bots));
  }

  setBots = bots => {
    this.setState({
      bots: bots
    });
  };

  // how to use .some
  //   if(persons.some(person => person.name === "Peter")){
  //     alert("Object found inside the array.");
  // } else{
  //     alert("Object not found.");
  // }

  addToArmy = enlistedBot => {
    const botExists = this.state.enlistedBots.some(
      bot => bot.id === enlistedBot.id
    );
    if (!botExists)
      this.setState({
        enlistedBots: [...this.state.enlistedBots, enlistedBot]
      });
    else {
      alert("Bot already enlisted");
    }
  };

  // working on this still..
  dischargeBotFromArmy = enlistedBot => {
    alert("This button is under construction.");

    // removePeople(e) {
    //   var array = [...this.state.people]; // make a separate copy of the array
    //   var index = array.indexOf(e.target.value)
    //   if (index !== -1) {
    //     array.splice(index, 1);
    //     this.setState({people: array});
    //   }
    // },
  };

  render() {
    const { enlistedBots, bots } = this.state;
    return (
      <div>
        <YourBotArmy bots={enlistedBots} />
        <BotCollection
          bots={bots}
          addToArmy={this.addToArmy}
          dischargeBotFromArmy={this.dischargeBotFromArmy}
        />
      </div>
    );
  }
}

export default BotsPage;
