import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../sass/Header.scss';

const Header = () => {
	return (
		<div className="header">
			<div className="header__inner">
				<div className="header__website-name">
					<Link to="/">{window.location.hostname}</Link>
				</div>
				<div className="header__navigation">
					<div className="navigation-item">
						<NavLink exact to="/" activeClassName="active-navlink">Home</NavLink>
					</div>
					<div className="navigation-item">
						<NavLink to="/faq" activeClassName="active-navlink">FAQ</NavLink>
					</div>
					<div className="navigation-item">
						<NavLink to="/">Language</NavLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
