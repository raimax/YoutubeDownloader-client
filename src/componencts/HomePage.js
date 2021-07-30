import React, { useState } from 'react';
import '../sass/HomePage.scss';
import axiosConfig from '../axiosConfig';
import VideoInfo from './VideoInfo';
import SearchIcon from '@material-ui/icons/Search';
import DownloadButton from './DownloadButton';
import Loader from './Loader';
import GetVideoIdFromUrl from '../logic/GetVideoIdFromUrl';
import FeaturesSection from './FeaturesSection';
import Message from './Message';
import { useTranslation } from 'react-i18next';
require('dotenv').config();

const HomePage = () => {
	const [input, setInput] = useState("");
	const [videoInfo, setVideoInfo] = useState(null);
	const [videoId, setVideoId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState(null);
	const { t } = useTranslation();

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
						<DownloadButton download={DownloadVideo} title={t("video-info.download-video")} />
						<DownloadButton download={DownloadAudio} title={t("video-info.download-audio")} />
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

		window.location.replace(process.env.REACT_APP_SERVER_URL + '/api/VideoDownload/' + videoId);
	}

	const DownloadAudio = (event) => {
		event.preventDefault();

		if (!videoId) {
			return;
		}

		window.location.replace(process.env.REACT_APP_SERVER_URL + '/api/AudioDownload/' + videoId);
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
				if (error?.response?.status === 404 || error?.response?.status === 429) {
					setMessage(error.response.data.message);
				}
				else {
					setMessage("Unknown error occurred");
				}
			})

		setLoading(false);
	}

	const renderMessage = () => {
		if (message) {
			return <Message content={message} />
		}

		// placeholder for message
		return <p style={{ minHeight: "34px", margin: 0 }}> </p>;
	}

	return (
		<div className="container">
			<div className="search-area">
				<p>{t("search-area.title")}</p>
				<div className="input-box">
					<div className="input-field">
						<SearchIcon />
						<input placeholder={t("search-bar.placeholder")} value={input} onChange={e => setInput(e.target.value)} type="text" />
					</div>
					<button disabled={loading} className="search-button" onClick={() => onSearch(input)}>{t("search-bar.search")}</button>
				</div>
				{renderMessage()}
			</div>
			{loading && <Loader />}
			{renderVideoInfo()}
			<FeaturesSection />
		</div>
	)
}

export default HomePage
