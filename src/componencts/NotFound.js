import React from 'react';
import '../sass/NotFound.scss';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
	const { t } = useTranslation();

	return (
		<div className="container">
			<div className="not-found">
				<div className="not-found__title">{t("not-found.title")}</div>
				<div className="not-found__description">{t("not-found.description")}</div>
			</div>
		</div>
	)
}

export default NotFound
