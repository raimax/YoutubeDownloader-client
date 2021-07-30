import React from 'react'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WebIcon from '@material-ui/icons/Web';
import '../sass/FeaturesSection.scss';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
	const { t } = useTranslation();

	return (
		<div className="grid-container">
			<div className="grid-item">
				<WebIcon />
				<div className="grid-item-title">
					{t("features.1.title")}
				</div>
				<div className="grid-item-description">
					{t("features.1.description")}
				</div>
			</div>
			<div className="grid-item">
				<AudiotrackIcon />
				<div className="grid-item-title">
					{t("features.2.title")}
				</div>
				<div className="grid-item-description">
					{t("features.2.description")}
				</div>
			</div>
			<div className="grid-item">
				<OndemandVideoIcon />
				<div className="grid-item-title">
					{t("features.3.title")}
				</div>
				<div className="grid-item-description">
					{t("features.3.description")}
				</div>
			</div>
		</div>
	)
}

export default FeaturesSection
