import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
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

  displayBots = () => {
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
          enlist={this.props.addToArmy}
          goBack={this.clearCurrentBot}
          addToArmy={this.props.addToArmy}
        />
      );
    }
  };

  render() {
    return <div className="ui four column grid">{this.displayBots()}</div>;
  }
}

export default BotCollection;
