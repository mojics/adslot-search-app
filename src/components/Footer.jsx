import React, { Component } from 'react';

class Footer extends Component {
	render(){
		return (
			<footer>
				<div className="wrapper">
					<div className="footer-logo">
						<img src="images/footer-logo.png" alt="Footer logo"/>
					</div>

					<div className="footer-links">
						&copy;2012 Adslot | Adslot Publisher | Adslot Create | Terms | Privacy Policy | Payment Policy
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;