import React from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import BotSpecs from '../components/BotSpecs';

class BotsPage extends React.Component {
	constructor() {
		super();
		this.state = {
			allBots: [],
			army: [],
			showDetails: ''
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
					army: [...previousState.army, bot],
					showDetails: ''
				};
			});
		}
	};

	deleteFromArmy = (deleteBot) => {
		console.log(deleteBot);
		// let currentArmy = this.state.army;
		// let botIndex = currentArmy.indexOf(bot);
		// currentArmy.splice(botIndex, 1);
		this.setState((previousState) => {
			let army = previousState.army;
			let botIndex = army.indexOf(deleteBot);
			army.splice(botIndex, 1);
			// delete army[botIndex];
			return {
				allBots: previousState.allBots,
				army: army
			};
		});
	};

	showDetails = (bot) => {
		this.setState({ showDetails: bot });
	};

	goBack = () => {
		this.setState({ showDetails: '' });
	};

	render() {
		return (
			<div>
				<YourBotArmy
					army={this.state.army}
					deleteFromArmy={(deleteBot) => this.deleteFromArmy(deleteBot)}
				></YourBotArmy>
				{this.state.showDetails === '' ? (
					<BotCollection
						allBots={this.state.allBots}
						addToArmy={this.addToArmy}
						showDetails={this.showDetails}
					></BotCollection>
				) : (
					<BotSpecs
						bot={this.state.showDetails}
						goBack={this.goBack}
						addToArmy={this.addToArmy}
					></BotSpecs>
				)}
			</div>
		);
	}
}

export default BotsPage;
