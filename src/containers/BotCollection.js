import React from 'react';
import BotCard from '../components/BotCard';

class BotCollection extends React.Component {
	render() {
		return (
			<div className="ui four column grid">
				<div className="row">
					{this.props.allBots.map((bot) => (
						<BotCard
							addToArmy={() => this.props.addToArmy(bot)}
							bot={bot}
							container={'collection'}
						></BotCard>
					))}
					Collection of all bots
				</div>
			</div>
		);
	}
}

export default BotCollection;
