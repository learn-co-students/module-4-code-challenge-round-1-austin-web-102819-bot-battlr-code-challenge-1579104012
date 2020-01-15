import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          Collection of all bots
          {this.props.clicked ? (
            <BotSpecs
              handleClick={this.props.handleClick}
              goBack={this.props.goBack}
              enlist={this.props.enlist}
			  bot={this.props.bots.find(bot => bot === this.props.clicked)}
			  handleUnenlist={this.props.unenlist}
            />
          ) : (
            this.props.bots.map(bot => (
              <BotCard
                key={bot.id}
                bot={bot}
                handleClick={this.props.handleClick}
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

export default BotCollection;
