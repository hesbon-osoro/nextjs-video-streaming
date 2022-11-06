import React, { FC } from 'react';
import styles from '../styles/videos.module.css';

type VideoDetailsProps = {
	title: string;
	name: string;
	duration: string;
};

const VideoDetails: FC<VideoDetailsProps> = ({ title, name, duration }) => {
	return (
		<div className={styles.videoDetails}>
			<h1>{title}</h1>
			<h2>{name}</h2>
			<h3>{duration}</h3>
		</div>
	);
};

export default VideoDetails;
