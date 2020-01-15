import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    bots: [],
    botArmy: [],
  };

  //fetch bots
  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => {this.setState({bots: data})});
  };

  //add bot to army
  enlistBot = bot => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} />
        <BotCollection bots={this.state.bots} enlistBot={this.enlistBot} />
      </div>
    );
  }
}

export default BotsPage;