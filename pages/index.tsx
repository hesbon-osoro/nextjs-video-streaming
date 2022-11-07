// @ts-nocheck
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { JumpLoader, VideoControls, VideoPlayer } from '../components';
import { VideoProp, videosData } from '../data';
import styles from '../styles/Home.module.css';

export default function Home() {
	const ENVIRONMENT_MODE = process.env.NODE_ENV;
	const SERVER_HOST =
		ENVIRONMENT_MODE === 'development'
			? `http://localhost:5000/video/stream`
			: 'https://nestjs-video-streaming-production.up.railway.app/video/stream';
	console.log(ENVIRONMENT_MODE);
	const videos: VideoProp[] = videosData;
	const [isLoading, setIsLoading] = useState(true);
	const [activeVideoIndex, setActiveVideoIndex] = useState(0);

	console.log('videosData: ', videosData);

	useEffect(() => {
		setTimeout(() => {
			if (videos.length) setIsLoading(false);
		}, 5000);
	}, []);

	const [currentVideo, setCurrentVideo] = useState(videos[0]);

	const handleNextVideo = () => {
		let { length } = videos;
		let index = activeVideoIndex + 1;
		index = index % length;
		setActiveVideoIndex(index);
		setCurrentVideo(videos[index]);
	};

	const handlePrevVideo = () => {
		let { length } = videos;
		let index = activeVideoIndex;

		if (index === 0) {
			index = length - 1;
		} else {
			index = index - 1;
		}
		setActiveVideoIndex(index);
		setCurrentVideo(videos[index]);
	};

	const nextVideoTitle = (index, arr) => {
		let nextIndex = index + 1;
		nextIndex = nextIndex % arr.length;
		return arr[nextIndex].title;
	};

	const prevVideoTitle = (index, arr) => {
		let prevIndex = 0;
		if (index === 0) {
			prevIndex = arr.length - 1;
		} else {
			prevIndex = index - 1;
		}
		return arr[prevIndex].title;
	};

	console.log('currentVideo: ', currentVideo);

	return (
		<div className={styles.container}>
			<Head>
				<title>NextJs Video Streaming</title>
				<meta
					name="description"
					content="A video streaming app using Node js with Nest js framework for backend and NextJs for Frontend."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{isLoading ? (
				<JumpLoader />
			) : (
				<>
					<h1>Video Streaming App in NextJs and NestJs</h1>
					<main className={styles.main}>
						<VideoPlayer videoId={activeVideoIndex} serverUrl={SERVER_HOST} />
						<VideoControls
							currentVideo={currentVideo}
							onNext={handleNextVideo}
							onPrev={handlePrevVideo}
							nextTitle={nextVideoTitle(activeVideoIndex, videos)}
							prevTitle={prevVideoTitle(activeVideoIndex, videos)}
						/>
					</main>
				</>
			)}

			<footer className={styles.footer}>
				<p>
					&copy;{new Date().getFullYear()}
					<a
						href="https://github.com/hesbon-osoro"
						target="_blank"
						rel="noopener noreferrer"
					>
						<span className={styles.logo}>
							<Image
								src="/github.png"
								alt="GitHub Logo"
								width={50}
								height={50}
							/>
						</span>
					</a>{' '}
					wazimu
				</p>
			</footer>
		</div>
	);
}
