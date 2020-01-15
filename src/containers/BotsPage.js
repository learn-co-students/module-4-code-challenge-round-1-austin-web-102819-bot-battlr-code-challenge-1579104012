import React from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';
class BotsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { bots: [], armyBots: [], showBotSpec: false };
	}

	componentDidMount() {
		fetch(URL)
			.then((resp) => resp.json())
			.then(
				(data) => this.setState({ bots: data }),
				(data) => console.log(data)
			);
	}

	removeBotFromArmy = (bot) => {
		const index = this.state.armyBots.findIndex((b) => b.id === bot.id);
		this.state.armyBots.splice(index, 1);
		this.setState((prevState) => {
			return {
				armyBots: prevState.armyBots
			};
		});
	};

	handleAddToBotsArmy = (bot) => {
		if (!this.state.armyBots.find((b) => b === bot)) {
			this.setState({ armyBots: [...this.state.armyBots, bot] });
		}
	};

	render() {
		return (
			<div>
				<YourBotArmy
					botsArmy={this.state.armyBots}
					removeBotFromArmy={this.removeBotFromArmy}
				/>
				<BotCollection
					bots={this.state.bots}
					handleAddToBotsArmy={this.handleAddToBotsArmy}
				/>
			</div>
		);
	}
}

export default BotsPage;
