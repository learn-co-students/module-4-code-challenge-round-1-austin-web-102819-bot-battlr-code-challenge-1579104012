import React from "react";
import BotsCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super();
    this.state = {
      botData: [],
      botArmy: []
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data =>
        this.setState({ botData: data }, () => console.log(this.state.botData))
      );
  }

  handleBotClick = bot => {
    this.setState({
      botArmy: [...this.state.botArmy, bot]
    });
    console.log("clicked");
  };

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} />
        <BotsCollection
          botData={this.state.botData}
          handleBotClick={this.handleBotClick}
        />
      </div>
    );
  }
}

export default BotsPage;
