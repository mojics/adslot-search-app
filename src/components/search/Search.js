import React, { Component } from 'react';
import SearchBox from './SearchBox';
import SearchResults from './SearchResults';
import _ from 'underscore';

class Search extends Component {

	constructor(){
		super();
		this.state = {
			keyword: '',
			results: [],
			sites: [],
			dirty: false
		};
	}
	componentWillMount() {
		let self = this;
     	self.delayedCallback = _.debounce(self._search, 500);
  	}

	/**
	 * Ideally this should be an ajax call but for this exercise
	 * I put 'sites' and 'categories' as a variable
	 */
	componentDidMount(){
		let listOfSites = [
		{
			"id": 1,
			"siteName": "SurferMag",
			"siteUrl": "www.surfermag.com",
			"description": "This is the description for SurferMag",
			"categoryIds": [
			  2
			]
		},
		{
			"id": 2,
			"siteName": "Ebay",
			"siteUrl": "www.ebay.com.au",
			"description": "This is the description for ebay",
			"categoryIds": [
			  1
			]
		},
		{
			"id": 3,
			"siteName": "Robs UI Tips",
			"siteUrl": "www.awesomeui.com.au",
			"description": "This is the description for the best site in the world. It is the best:)",
			"categoryIds": [
			  4, 3
			]
		},
		{
			"id": 4,
			"siteName": "Table Tennis Tips - How to not come runners up",
			"siteUrl": "www.ttt.com",
			"description": "This is the description for Table Tennis Tips",
			"categoryIds": [
			  1, 2, 3, 4
			 ]
		}];

		let categories = [
			{
				id: 1,
				description: "Arts & Entertainment"
			},
			{
				id: 2,
				description: "Automotive"
			},
			{
				id: 3,
				description: "Business"
			},
			{
				id: 4,
				description: "Careers"
			}
		]


		var mergedList = _.map(listOfSites, function(item){
			let listOfCategories = _.reject(categories, function(name) {
			    return item.categoryIds.indexOf(name.id) === -1;
			});

			let arr = [];
			_(listOfCategories).each(function(elem, key){
			   arr.push(elem.description);
			});

		    return _.extend(item, { categories : arr });
		});

		console.log('mergedList',mergedList);
		this.setState({sites: mergedList}); 
	}

	handleSearch(keyword) {
		let self = this;
		let state = {...self.state};
		state.keyword = keyword;
		//state.dirty = true;
		self.setState(state);
		
		setTimeout(function(){
			self.delayedCallback(self.state.keyword);
		});
	}

	_search(data) {
		let self = this;
		let state = {...this.state.results};
		let sites = {...this.state.sites};

		data = data.toLowerCase().split(',');

		let results = _.filter(sites, function(item){
			let siteNameArr = item.siteName.toLowerCase().split(" ");
			let siteCategories = _.map(item.categories, (category) => category.toLowerCase() );
			console.log(" ");
			console.log('siteNameArr',siteNameArr);
			console.log('siteCategories',siteCategories);
			console.log('item.categories',item.categories);
			console.log('_.intersection(siteCategories, data).length > 0',_.intersection(siteCategories, data).length > 0);
			console.log('_.intersection(siteNameArr, data).length > 0',_.intersection(siteNameArr, data).length > 0);

			return ( 
				_.intersection(siteNameArr, data).length > 0 || 
				_.intersection(siteCategories, data).length > 0
				);
		});


		state.results = results;
		
		//set search app state to dirty
		state.dirty = true;
		
		setTimeout(function(){
			self.setState(state);
		})

		
	}

	render() {
		return (
			<div className="search-app">
				<div className="wrapper">
					<SearchBox onSearch={this.handleSearch.bind(this)} keyword={this.state.keyword}/>
					<SearchResults results={this.state.results} dirty={this.state.dirty}/>
				</div>
			</div>
		);
	}
}

export default Search;