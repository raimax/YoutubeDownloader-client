import React from 'react'
import '../sass/VideoInfo.scss'
import { useTranslation } from 'react-i18next';

const VideoInfo = (props) => {
	const { author, duration, title } = props;
	const { t } = useTranslation();

	return (
		<div className="video-info">
			<div className="video-info__title">{title}</div>
			<div>{t("video-info.channel")}: {author}</div>
			<div>{t("video-info.duration")}: {duration}</div>
		</div>
	)
}

export default VideoInfo
