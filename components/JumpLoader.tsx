import React, { useState } from 'react';

const JumpLoader = () => {
	const colors = [
		'#c13d60',
		'#192a56',
		'#4cd137',
		'#00a8ff',
		'#fbc531',
		'#273c75',
		'#1289A7',
		'#0652DD',
		'#009432',
		'#006266',
		'#FFC312',
		'#12CBC4',
		'#D980FA',
	];
	const [strokeColor, setStrokeColor] = useState(colors[0]);
	const [colorValue, setColorValue] = useState(0);

	function updateColor() {
		setColorValue(Math.floor(Math.random() * colors.length));
		const color = colors[colorValue];
		document.documentElement.style.setProperty('--color', color);
	}

	function updateStrokeColor() {
		const color = colors[colorValue];
		setStrokeColor(color);
	}
	return (
		<div className="container" onAnimationIteration={updateColor}>
			<h4
				className="text"
				style={{ color: strokeColor }}
				onAnimationIteration={updateStrokeColor}
			>
				Fetching videos...
			</h4>
			<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
				<path
					className="jumper"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M47.5,94.3c0-23.5,19.9-42.5,44.5-42.5s44.5,19,44.5,42.5"
				/>
				<g
					stroke={strokeColor}
					stroke-width="1"
					onAnimationIteration={updateStrokeColor}
				>
					<ellipse
						className="circleL"
						fill="none"
						stroke-miterlimit="10"
						cx="47.2"
						cy="95.6"
						rx="10.7"
						ry="2.7"
					/>
					<ellipse
						className="circleR"
						fill="none"
						stroke-miterlimit="10"
						cx="136.2"
						cy="95.6"
						rx="10.7"
						ry="2.7"
					/>
				</g>
				<path
					className="jumper clone"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M47.5,94.3c0-23.5,19.9-42.5,44.5-42.5s44.5,19,44.5,42.5"
				/>
			</svg>
		</div>
	);
};

export default JumpLoader;
