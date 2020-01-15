import React from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import Search from '../components/Search';
import Filter from '../components/Filter';

const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';
class BotsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { bots: [], armyBots: [], allBots: [], showBotSpec: false };
	}

	componentDidMount() {
		fetch(URL)
			.then((resp) => resp.json())
			.then(
				(data) => this.setState({ bots: data, allBots: data }),
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

	onChange = (e) => {
		console.log(e.target.value);

		const filteredArray = this.state.allBots.filter((bot) =>
			bot.name.includes(e.target.value)
		);

		this.setState({ bots: filteredArray });
	};

	handleFilter = (e) => {
		e.preventDefault();
		console.log(e.target.searchTerm.value);

		console.log(e.target.filter.value);
		let filteredArray;
		if (e.target.filter.value === 'All') {
			filteredArray = this.state.allBots.filter((b) =>
				b.name.includes(e.target.searchTerm.value)
			);
		} else {
			filteredArray = this.state.allBots
				.filter((bot) => bot.bot_class === e.target.filter.value)
				.filter((b) => b.name.includes(e.target.searchTerm.value));
		}
		this.setState({ bots: filteredArray });
	};

	render() {
		return (
			<div>
				<YourBotArmy
					botsArmy={this.state.armyBots}
					removeBotFromArmy={this.removeBotFromArmy}
				/>
				<br></br>
				<div className="ui four column relaxed centered grid">
					<Search onChange={this.onChange} handleFilter={this.handleFilter} />
					{/* <Filter handleFilter={this.handleFilter} /> */}
				</div>
				<br></br>
				<BotCollection
					bots={this.state.bots !== undefined ? this.state.bots : []}
					handleAddToBotsArmy={this.handleAddToBotsArmy}
				/>
			</div>
		);
	}
}

export default BotsPage;
