import React from 'react';
import BotCard from '../components/BotCard';
import BotSpecs from '../components/BotSpecs';

class BotCollection extends React.Component {
	constructor(props) {
		super(props);
		this.state = { botSpecs: null };
	}

	showBotSpecs = (bot) => {
		this.setState({ botSpecs: bot });
	};

	goBack = () => {
		this.setState({ botSpecs: null });
	};

	render() {
		return (
			<div className="ui four column relaxed centered grid">
				<div className="row">
					{this.state.botSpecs === null ? (
						this.props.bots.map((bot) => (
							<BotCard
								key={bot.id}
								bot={bot}
								// {...this.props}
								showBotSpecs={this.showBotSpecs}
							/>
						))
					) : (
						<BotSpecs
							bot={this.state.botSpecs}
							goBack={this.goBack}
							handleAddToBotsArmy={this.props.handleAddToBotsArmy}
						/>
					)}
				</div>
			</div>
		);
	}
}

export default BotCollection;
