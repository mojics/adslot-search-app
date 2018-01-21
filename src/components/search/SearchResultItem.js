import React, { Component } from 'react';

class SearchResultItem extends Component {
	render(){
		return (
			<div className="search-result-item">
				<div className="search-result-item__header">
					<a href={'://'+this.props.data.siteUrl}> 
					{this.props.data.siteUrl}
					</a>
				</div>
				<div className="search-result-item__desc">
					{this.props.data.description}
				</div>
			</div>
		);
	}
}

export default SearchResultItem;