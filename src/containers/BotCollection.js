import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render() {

	// const {bots} = this.state;
    return (
      <div className="ui four column grid">
        <div className="row">
		{this.props.bots.bots.map((bot, i) => {
            return <BotCard key={i} bot={bot} addToArmy={this.props.addToArmy}/>;
          })}
          Collection of all bots
        </div>
      </div>
    );
  }
}

export default BotCollection;
