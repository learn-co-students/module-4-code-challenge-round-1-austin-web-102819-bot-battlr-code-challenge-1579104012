import React, { Component } from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends Component {
  state = {
    currentBot: {}
  };

  //toggle state to remove from army list
  showBot = bot => {
    this.setState({
      currentBot: bot
    });
  };

  goBack = () => {
    this.setState({
      currentBot: {}
    });
  };

  renderBots = () => {
    if (!this.state.currentBot.id) {
      return (
        <div className="row">
          Collection of all bots
          {this.props.bots.map(bot => (
            <BotCard key={bot.id} bot={bot} showBot={this.showBot} />
          ))}
        </div>
      );

    } else {
      return (
        <BotSpecs
          bot={this.state.currentBot}
          enlist={this.props.enlistBot}
          goBack={this.goBack}
          enlistBot={this.props.enlistBot}
        />
      );
    }
  };

  render() {
    return <div className="ui four column grid">{this.renderBots()}</div>;
  }
}

export default BotCollection;