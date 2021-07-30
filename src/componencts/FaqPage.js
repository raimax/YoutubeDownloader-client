import React from 'react';
import '../sass/FaqPage.scss';
import { useTranslation } from 'react-i18next';

const FaqPage = () => {
	const { t } = useTranslation();

	return (
		<div className="container">
			<div className="faq">
				<p className="faq__title">{t("faq.title")}</p>
				<div className="faq__group">
					<p className="faq__question">
						Q: Is frequently asked questions section under construction?.
					</p>
					<p className="faq__answer">
						Yes.
					</p>
				</div>
			</div>
		</div>
	)
}

export default FaqPage
