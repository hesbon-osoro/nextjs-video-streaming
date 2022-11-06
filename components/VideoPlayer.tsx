import React, { FC } from 'react';

type VideoPlayerProp = {
	videoId: number;
	serverUrl: string;
};

const VideoPlayer: FC<VideoPlayerProp> = ({ videoId, serverUrl }) => {
	return (
		<video id="videoPlayer" controls muted autoPlay>
			<source src={`${serverUrl}/${videoId}`} type="video/mp4" />
		</video>
	);
};

export default VideoPlayer;
