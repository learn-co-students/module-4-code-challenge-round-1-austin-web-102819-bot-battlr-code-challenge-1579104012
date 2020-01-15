import React from 'react';

const Search = (props) => {
	return (
		<div className="ui search">
			<form onSubmit={(event) => props.handleFilter(event)}>
				<div className="ui icon input">
					Search by Bot Name:<br></br>
					<input
						className="prompt"
						onChange={(event) => props.onChange(event)}
						name="searchTerm"
					/>
					<i className="search icon" />
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
