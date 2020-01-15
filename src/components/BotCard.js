import React from 'react';

class BotCard extends React.Component {
	constructor(props) {
		super();
		this.state = {
			bot: props.bot,
			container: props.container
		};
	}

	handleCardClick = () => {
		// console.log(this.props.bot);
		if (this.state.container === 'collection') {
			this.props.showDetails();
		} else if (this.state.container === 'army') {
			this.props.deleteFromArmy(this.props.bot);
		}
	};

	render() {
		const bot = this.state.bot;

		let botType;

		switch (bot.bot_class) {
			case 'Assault':
				botType = <i className="icon military" />;
				break;
			case 'Defender':
				botType = <i className="icon shield" />;
				break;
			case 'Support':
				botType = <i className="icon ambulance" />;
				break;
			default:
				botType = <div />;
		}

		return (
			<div className="ui column">
				<div className="ui card" key={bot.id} onClick={this.handleCardClick}>
					<div className="image">
						<img alt="oh no!" src={bot.avatar_url} />
					</div>
					<div className="content">
						<div className="header">
							{bot.name} {botType}
						</div>

						<div className="meta text-wrap">
							<small>{bot.catchphrase}</small>
						</div>
					</div>
					<div className="extra content">
						<span>
							<i className="icon heartbeat" />
							{bot.health}
						</span>

						<span>
							<i className="icon lightning" />
							{bot.damage}
						</span>
						<span>
							<i className="icon shield" />
							{bot.armor}
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default BotCard;
