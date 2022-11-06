// @ts-nocheck
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
	JumpLoader,
	VideoControls,
	VideoDetails,
	VideoPlayer,
} from '../components';
import { VideoProp, videosData } from '../data';
import styles from '../styles/Home.module.css';

export default function Home() {
	const SERVER_HOST = `http://localhost:5000/video/stream`;
	// const [videos, setVideos] = useState<VideoProp[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	const videos: VideoProp[] = [
		{
			id: 0,
			name: 'big-buck-bunny',
			duration: '<1 min',
			title: 'Big Buck Bunny',
		},
		{
			id: 1,
			name: 'tom-and-jerry',
			duration: '3 mins',
			title: 'Tom & Jerry',
		},
		{
			id: 2,
			name: 'soul',
			duration: '4 mins',
			title: 'Soul',
		},
		{
			id: 3,
			name: 'outside-the-wire',
			duration: '2 mins',
			title: 'Outside the wire',
		},
		{
			id: 4,
			name: 'hampi-restaurant',
			duration: '3 mins',
			title: 'Hampi Restaurant demo',
		},
		{
			id: 5,
			name: 'detect-and-blur-human-faces',
			duration: '1 min',
			title: 'Detect and blur human faces',
		},
		{
			id: 6,
			name: 'bitcoin-meme',
			duration: '<1 min',
			title: 'Bitcoin meme',
		},
	];

	useEffect(() => {
		console.log('Initial videos: ', videos);
		// setVideos(videosData);
		setTimeout(() => {
			setIsLoading(true);
		}, 1000);
		console.log('Fetched videos: ', videos);
	}, []);

	const [currentVideo, setCurrentVideo] = useState(
		videos[/*Math.floor(Math.random() * videos.length)*/ 0]
	);
	// const [activeVideoIndex, setActiveVideoIndex] = useState('');

	const handleNextVideo = () => {
		let { length } = videos;
		let index = currentVideo.id + 1;
		index = index % length;
		setCurrentVideo(videos[index]);
	};

	const handlePrevVideo = () => {
		let { length } = videos;
		let index = currentVideo.id - 1;
		index = index % length;
		setCurrentVideo(videos[index]);
	};

	const nextVideoTitle = (index, arr) => {
		let nextIndex = index + 1;
		nextIndex = nextIndex % arr.length;
		return arr[nextIndex].title;
	};

	const prevVideoTitle = (index, arr) => {
		let prevIndex = index - 1;
		prevIndex = prevIndex % arr.length;
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
				<main className={styles.main}>
					<h1>Video Streaming App in NextJs and NestJs</h1>
					<VideoPlayer videoId={currentVideo.id} serverUrl={SERVER_HOST} />
					<VideoDetails
						title={currentVideo.title}
						description={currentVideo.name}
						duration={currentVideo.duration}
					/>
					<VideoControls
						currentVideo={currentVideo}
						onNext={handleNextVideo}
						onPrev={handlePrevVideo}
						nextTitle={nextVideoTitle(currentVideo.id, videos)}
						prevTitle={prevVideoTitle(currentVideo.id, videos)}
					/>
				</main>
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
