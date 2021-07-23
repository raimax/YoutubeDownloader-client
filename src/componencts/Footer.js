import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/Footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<Link to="/">Contact</Link>/
			<Link to="/">Privacy Policy</Link>/
			<Link to="/">Terms of Use</Link>
		</div>
	)
}

export default Footer
