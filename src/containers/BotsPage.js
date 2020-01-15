import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);

    this.state = {
      bots: [],
      myBots: [],
      clicked: false
    };
  }
  goBack = () => {
    this.setState({ clicked: false });
  };

  handleClick = bot => {
    this.setState({
      clicked: bot
    });
  };

  enlist = bot => {
    if (this.state.myBots.find(b => b === bot)) {
      null;
    } else {
      this.setState({ myBots: [bot, ...this.state.myBots] });
    }
  };
  unenlist = bot => {
    if (!this.state.myBots.find(b => b === bot)) {
      null;
    } else {
      let newArray = [...this.state.myBots]
      let index = newArray.indexOf(bot)
      newArray.splice(index, 1)
      this.setState({ myBots: newArray });
    }
  };

  componentDidMount() {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(res => res.json())
      .then(res => this.setState({ bots: res }));
  }
  render() {
    return (
      <div>
        <YourBotArmy
          bots={this.state.myBots}
          enlist={this.enlist}
          handleClick={this.handleClick}
          
        />
        <BotCollection
          bots={this.state.bots}
          enlist={this.enlist}
          goBack={this.goBack}
          handleClick={this.handleClick}
          clicked={this.state.clicked}
          unenlist={this.unenlist}
        />
      </div>
    );
  }
}

export default BotsPage;
