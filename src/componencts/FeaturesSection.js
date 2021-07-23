import React from 'react'
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WebIcon from '@material-ui/icons/Web';
import '../sass/FeaturesSection.scss';

const FeaturesSection = () => {
	return (
		<div className="grid-container">
			<div className="grid-item">
				<WebIcon />
				<div className="grid-item-title">
					Works in a Browser
				</div>
				<div className="grid-item-description">
					No installation required
				</div>
			</div>
			<div className="grid-item">
				<AudiotrackIcon />
				<div className="grid-item-title">
					Download Audio
				</div>
				<div className="grid-item-description">
					Download high quality mp3 audio files
				</div>
			</div>
			<div className="grid-item">
				<OndemandVideoIcon />
				<div className="grid-item-title">
					Download Video
				</div>
				<div className="grid-item-description">
					Download high definition mp4 video files
				</div>
			</div>
		</div>
	)
}

export default FeaturesSection
