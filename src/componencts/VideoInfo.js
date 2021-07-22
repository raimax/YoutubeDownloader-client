import React from 'react'
import '../sass/VideoInfo.scss'

const VideoInfo = (props) => {
	const { author, duration, title} = props;

	return (
		<div className="video-info">
			<div className="video-info__title">{title}</div>
			<div>channel: {author}</div>
			<div>duration: {duration}</div>
		</div>
	)
}

export default VideoInfo
