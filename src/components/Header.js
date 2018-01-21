import React, { Component } from 'react';

class Layout extends Component {
	render(){
		return (
			<header>
				<div className="header-wrapper wrapper">
					<img className="logo" src="images/logo.png" alt="adslot logo"/>
					<div className="close-button"></div>
				</div>
			</header>
		);
	}
}

export default Layout;