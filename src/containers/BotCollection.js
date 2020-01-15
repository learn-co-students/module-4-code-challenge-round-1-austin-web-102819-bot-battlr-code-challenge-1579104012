import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends Component {
  state = {
    currentBot: {}
  };

  setCurrentBot = bot => {
    this.setState({
      currentBot: bot
    });
  };

  clearCurrentBot = () => {
    this.setState({
      currentBot: {}
    });
  };

  renderBots = () => {
    if (!this.state.currentBot.id) {
      return (
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard key={bot.id} bot={bot} viewBot={this.setCurrentBot} />
          ))}
        </div>
      );
    } else {
      return (
        <BotSpecs
          bot={this.state.currentBot}
          goBack={this.clearCurrentBot}
          addToArmy={this.props.addToArmy}
          dischargeBotFromArmy={this.props.dischargeBotFromArmy}
        />
      );
    }
  };

  render() {
    return <div className="ui four column grid">{this.renderBots()}</div>;
  }
}

export default BotCollection;
