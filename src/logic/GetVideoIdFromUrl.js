const GetVideoIdFromUrl = (videoUrl) => {
	if (!videoUrl) {
		return;
	}

	if (videoUrl.includes('&pp')) {
		videoUrl = videoUrl.split('&pp')[0];
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

export default GetVideoIdFromUrl;