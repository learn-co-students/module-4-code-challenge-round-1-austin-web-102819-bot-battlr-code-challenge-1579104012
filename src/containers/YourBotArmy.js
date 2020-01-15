import React from 'react';
import ArmyBotCard from '../components/ArmyBotCard';

class YourBotArmy extends React.Component {
	//your bot army code here...

	render() {
		return (
			<div className="ui segment inverted olive bot-army">
				<div className="ui five column grid">
					<div className="row bot-army-row">
						{this.props.botsArmy.map((army) => (
							<ArmyBotCard key={army.id} bot={army} {...this.props} />
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default YourBotArmy;
