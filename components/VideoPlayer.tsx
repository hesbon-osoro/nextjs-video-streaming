// @ts-nocheck
import React, { FC, useEffect, useRef } from 'react';
import styles from '../styles/videos.module.css';

type VideoPlayerProp = {
	videoId: number;
	serverUrl: string;
};

const VideoPlayer: FC<VideoPlayerProp> = ({ videoId, serverUrl }) => {
	const videoRef = useRef();

	useEffect(() => {
		videoRef?.current?.load();
	}, [videoId]);

	return (
		<div className={styles.playerContainer}>
			<video
				ref={videoRef}
				id="videoPlayer"
				// hacky solution to reload on url change
				// key={`${serverUrl}/${videoId}`}
				controls
				muted
				autoPlay
			>
				<source src={`${serverUrl}/${videoId}`} type="video/mp4" />
			</video>
		</div>
	);
};

export default VideoPlayer;
