import React, { Component } from 'react';

class SearchBox extends Component {
	
	onChange(e) {
		//e.persist();
		this.props.onSearch(e.target.value);
	}

	render(){
		return (
			<div className="search-box">
				<input onChange={this.onChange.bind(this)} className="search-box__input" placeholder="Search Publishers" value={this.props.keyword}/>
				<div className="search-box__icon"></div>
			</div>
		);
	}
}

export default SearchBox;