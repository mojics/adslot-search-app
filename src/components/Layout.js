import React, { Component } from 'react';
import Header from './Header';
import Search from './search/Search';
import Footer from './Footer';
class Layout extends Component {
	render(){
		return (
			<div className="main-wrapper">
				<Header/>
				<Search/>
				<Footer/>
			</div>
		);
	}
}

export default Layout;