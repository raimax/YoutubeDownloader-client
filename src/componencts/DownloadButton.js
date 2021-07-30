import React, { useState } from 'react';
import '../sass/DownloadButton.scss';
import GetAppIcon from '@material-ui/icons/GetApp';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useTranslation } from 'react-i18next';

const DownloadButton = (props) => {
	const [loading, setloading] = useState(false);
	const { t } = useTranslation();

	const onClick = (event) => {
		setloading(true);
		props.download(event);
		setTimeout(() => { setloading(false) }, 3000);
	}

	const renderButtonContent = () => {
		if (loading) {
			return (
				<React.Fragment>
					<CircularProgress size="1.5em" />
					<p className="download-button__title">{t("video-info.wait")}...</p>
				</React.Fragment>
			)
		}

		return (
			<React.Fragment>
				<GetAppIcon />
				<p className="download-button__title">{props.title}</p>
			</React.Fragment>
		);
	}

	return (
		<button disabled={loading} onClick={event => onClick(event)} className="download-button">
			{renderButtonContent()}
		</button>
	)
}

export default DownloadButton
