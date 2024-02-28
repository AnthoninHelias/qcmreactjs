// Timer.tsx

import React, { useState, useEffect } from 'react';

interface TimerProps {
	initialTime: number;
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
	const [time, setTime] = useState(initialTime);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setTime((prevTime) => {
				const newTime = prevTime - 1;
				if (newTime <= 0) {
					clearInterval(intervalId); // Arrête l'intervalle lorsque le temps atteint zéro
					return 0;
				}
				return newTime;
			});
		}, 1000);

		// Nettoyage de l'intervalle lors du démontage du composant
		return () => clearInterval(intervalId);
	}, []);

	if (time !== 0) {
		return <p>Temps restant : {time} secondes</p>;
	} else {
		return <p>Temps écoulé !</p>;
	}
};

export default Timer;
