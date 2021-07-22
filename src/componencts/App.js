import React, { useState } from 'react';
import axiosConfig from '../axiosConfig';
import '../sass/App.scss';
import VideoInfo from './VideoInfo';
import SearchIcon from '@material-ui/icons/Search';
import DownloadButton from './DownloadButton';
import Loader from './Loader';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WebIcon from '@material-ui/icons/Web';

const App = () => {
	const [input, setInput] = useState("");
	const [videoInfo, setVideoInfo] = useState(null);
	const [videoId, setVideoId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const renderVideoInfo = () => {
		if (videoInfo && !loading) {
			return (
				<div className="content">
					<img src={videoInfo.thumbnails[videoInfo.thumbnails.length - 1].url} alt={videoInfo.title} />
					<div className="content-info">
						<VideoInfo
							title={videoInfo.title}
							author={videoInfo.author}
							duration={videoInfo.duration}
						/>
						<DownloadButton download={DownloadVideo} title="Download Video" />
						<DownloadButton download={DownloadAudio} title="Download Audio" />
					</div>
				</div>
			)
		}
	}

	const DownloadVideo = (event) => {
		event.preventDefault();

		if (!videoId) {
			return;
		}

		window.location.replace('https://localhost:44318/api/VideoDownload/' + videoId);
	}

	const DownloadAudio = (event) => {
		event.preventDefault();

		if (!videoId) {
			return;
		}

		window.location.replace('https://localhost:44318/api/AudioDownload/' + videoId);
	}

	const onSearch = (videoUrl) => {
		if (input && input.trim()) {
			GetVideoInfoAsync(videoUrl);
			setInput("");
		}
		else {
			setMessage('Paste a youtube link');
		}
	}

	const GetVideoIdFromUrl = (videoUrl) => {
		if (!videoUrl) {
			return;
		}

		if (videoUrl.includes('youtu.be/')) {
			videoUrl = videoUrl.split('youtu.be/')[1];
		}

		if (videoUrl.includes('watch?v=')) {
			videoUrl = videoUrl.split('watch?v=')[1];
		}

		if (videoUrl.includes('&list=')) {
			videoUrl = videoUrl.split('&list=')[0];
		}

		return videoUrl;
	}

	const GetVideoInfoAsync = async (videoUrl) => {
		setLoading(true);
		setMessage(null);
		const extractedVideoId = GetVideoIdFromUrl(videoUrl);

		await axiosConfig.get('/VideoInfo/' + extractedVideoId)
			.then(response => {
				const videoInfoResponse = {
					title: response.data.title,
					author: response.data.author,
					duration: response.data.duration,
					thumbnails: response.data.thumbnails
				}

				setVideoInfo(videoInfoResponse);
				setVideoId(extractedVideoId);
			})
			.catch(error => {
				if (error?.response?.status === 404) {
					setMessage("Video not found");
				}
				else {
					setMessage("Unknown error occurred");
				}
			})

		setLoading(false);
	}

	return (
		<div className="container">
			<div className="search-area">
				<div className="input-box">
					<div className="input-field">
						<SearchIcon />
						<input placeholder="Paste youtube link here..." value={input} onChange={e => setInput(e.target.value)} type="text" />
					</div>
					<button className="search-button" onClick={() => onSearch(input)}>Search</button>
				</div>
				<p>{message}</p>
			</div>
			{loading && <Loader />}
			{renderVideoInfo()}
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
		</div>
	)
}

export default App
