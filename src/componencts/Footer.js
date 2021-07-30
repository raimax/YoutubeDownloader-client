import React from 'react';
import { Link } from 'react-router-dom';
import '../sass/Footer.scss';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

	return (
		<div className="footer">
			<Link to="/contact">{t("footer.contact")}</Link>/
			<Link to="/privacy">{t("footer.privacy-policy")}</Link>/
			<Link to="/terms">{t("footer.terms-of-use")}</Link>
		</div>
	)
}

export default Footer
