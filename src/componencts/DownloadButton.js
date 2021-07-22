import React, { useState } from 'react';
import '../sass/DownloadButton.scss';
import GetAppIcon from '@material-ui/icons/GetApp';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const DownloadButton = (props) => {
	const [loading, setloading] = useState(false);

	const onClick = (event) => {
		setloading(true);
		props.download(event);
		setTimeout(() => { setloading(false) }, 3000);
	}

	const renderButtonContent = () => {
		if (loading) {
			return <AutorenewIcon className="spinner"/>;
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
