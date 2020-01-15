import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //   your code here
  // constructor() {
  //   super();
  //   this.state = {
  //     display: false
  //   };
  // }

  // handleBotClick = () => {
  //   this.setState({ display: true });
  //   console.log("clicked");
  // };

  render() {
    return (
      <div className="ui four column grid">
        <div className="row"></div>
        {this.props.botData.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            handleBotClick={this.handleBotClick}
          />
        ))}
        {this.props.botData.map(bot => (
          <BotSpecs key={bot.name} bot={bot} />
        ))}
      </div>
    );
  }
}

export default BotCollection;
