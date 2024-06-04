// Timer.tsx

import React, { useState, useEffect } from 'react';
import '../pages/Timer.css'; // Import the CSS file for styling


interface TimerProps {
	initialTime: number;
}
let timeUp = false;
const Timer: React.FC<TimerProps> = ({ initialTime }) => {
	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime((prevTime) => {
				const newTime = prevTime - 1;
				if (newTime <= 0) {
					clearInterval(intervalId);
					return 0;
				}
				return newTime;
			});
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	const progress = (initialTime - time) / initialTime * 100; // Calculate progress percentage

	if (time !== 0) {
		return (
			<div>
				<p>Temps restant : {time} secondes</p>
				<div className="progress-bar" style={{ width: `${progress}%` }}></div>
			</div>
		);
	}else {return(
		<div>
			{timeUp = true}
			<p>Temps écoulé !</p>
			<div className="progress-bar" style={{width: `${progress}%`}}></div>
		</div>);
	}
};

export {Timer as default, timeUp};



