import React, { FC } from 'react';
import { VideoProp } from '../data';
import styles from '../styles/videos.module.css';

type VideoControlsProps = {
	onPrev: () => void;
	onNext: () => void;
	currentVideo: VideoProp;
	nextTitle: string;
	prevTitle: string;
};

const VideoControls: FC<VideoControlsProps> = ({
	onPrev,
	onNext,
	currentVideo,
	nextTitle,
	prevTitle,
}) => {
	return (
		<div className={styles.buttons}>
			<button onClick={onPrev}>
				<span>&larr;</span>
				{prevTitle}
			</button>
			{currentVideo.title}
			<button onClick={onNext}>
				{nextTitle}
				<span>&rarr;</span>
			</button>
		</div>
	);
};

export default VideoControls;
