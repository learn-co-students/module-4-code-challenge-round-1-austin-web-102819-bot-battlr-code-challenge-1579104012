import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props) {
    super(props);

    this.state = {
      bots: [],
      myBots: []
    };
  }

  handleClick = (bot) => {
    if (this.state.myBots.includes(bot)) {
      let newArray = [...this.state.myBots]
      let index = newArray.indexOf(bot)
      newArray.splice(index, 1)
      this.setState({myBots: newArray})
    } else {
      this.setState({myBots: [bot, ...this.state.myBots]})
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
        <YourBotArmy bots={this.state.myBots} handleClick={this.handleClick}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default BotsPage;
