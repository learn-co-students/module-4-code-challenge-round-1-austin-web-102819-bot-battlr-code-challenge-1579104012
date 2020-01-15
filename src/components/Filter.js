import React from 'react';

const Search = (props) => {
	return (
		<div className="ui form">
			<form onSubmit={(event) => props.handleFilter(event)}>
				<div className="field">
					<select
						name="filter"
						id="filter"
						// onChange={(event) => this.props.onChangeType(event)}
					>
						<option value="All">All</option>
						<option value="Assault">Assault</option>
						<option value="Defender">Defender</option>
						<option value="Support">Support</option>
					</select>
					<button
						type="submit"
						// onClick={this.props.onFindPetsClick}
						className="ui secondary button"
					>
						Filter
					</button>
				</div>
			</form>
		</div>
	);
};

export default Search;
