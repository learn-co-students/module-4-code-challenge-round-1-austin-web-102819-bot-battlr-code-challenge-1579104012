import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //   your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row"></div>
        {this.props.botData.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleBotClick={this.props.handleBotClick}
          />
        ))}
      </div>
    );
  }
}

export default BotCollection;
