import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SearchResultItem from './SearchResultItem';

class SearchResults extends Component {

	static propTypes = {
		results: PropTypes.array
	};

	static defaultProps = {
		results: [],
   	};

   	componentDidUpdate(props) {
   		console.log('componentDidUpdate', props)
   	}

	render(){
		let results = this.props.results.map(function(data) {
			return (<SearchResultItem key={data.id} data={data}/>);
		});

		console.log('this.props.results',this.props.results.length);
		console.log('this.props.dirty',this.props.dirty);

		
		if ( this.props.dirty === true & this.props.results.length === 0) {
			results = <div className="search-result__empty"> We currently don't have any results for your search, try another. </div>
		}
		return (
			<div className="search-result">
				{ results }
			</div>
		);
	}
}

export default SearchResults;