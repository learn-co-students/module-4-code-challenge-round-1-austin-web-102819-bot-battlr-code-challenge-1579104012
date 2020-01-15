import React from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';

class BotsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			allBots: [],
			army: []
		};
	}
	//start here with your code for step one

	componentDidMount() {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
			.then((res) => res.json())
			.then((json) => this.setState({ allBots: json }));
	}

	addToArmy = (bot) => {
		if (!this.state.army.includes(bot)) {
			this.setState((previousState) => {
				return {
					allBots: previousState.allBots,
					army: [...previousState.army, bot]
				};
			});
		}
	};

	deleteFromArmy = (bot) => {
		let currentArmy = this.state.army;
		let botIndex = currentArmy.indexOf(bot);
		let deleted = currentArmy.splice(botIndex, 1);
		this.setState((previousState) => {
			return {
				allBots: previousState.allBots,
				army: currentArmy
			};
		});
	};

	render() {
		return (
			<div>
				<YourBotArmy
					army={this.state.army}
					deleteFromArmy={this.deleteFromArmy}
				></YourBotArmy>
				<BotCollection
					allBots={this.state.allBots}
					addToArmy={this.addToArmy}
				></BotCollection>
			</div>
		);
	}
}

export default BotsPage;
