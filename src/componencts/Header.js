import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../sass/Header.scss';
import LanguageDropdown from './LanguageDropdown';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t } = useTranslation();

	return (
		<div className="header">
			<div className="header__inner">
				<div className="header__website-name">
					<Link to="/">{window.location.hostname}</Link>
				</div>
				<div className="header__navigation">
					<div className="navigation-item">
						<NavLink exact to="/" activeClassName="active-navlink">{t("navigation.home")}</NavLink>
					</div>
					<div className="navigation-item">
						<NavLink to="/faq" activeClassName="active-navlink">{t("navigation.faq")}</NavLink>
					</div>
					<LanguageDropdown />
				</div>
			</div>
		</div>
	)
}

export default Header
