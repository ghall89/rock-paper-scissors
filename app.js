const resultEl = document.querySelector('#result');
const loadEl = document.querySelector('#loading');

const choiceArr = ['rock', 'paper', 'scissors'];

const gameLogic = (you, cpu) => {
	let result;

	loadEl.style.display = 'none';
	resultEl.style.display = 'block';

	if (you === cpu) {
		result = "It's a tie!";
	} else {
		if (
			(you === 'rock' && cpu === 'scissors') ||
			(you === 'paper' && cpu === 'rock') ||
			(you === 'scissors' && cpu === 'paper')
		) {
			result = 'You win! 🎉';
		} else {
			result = 'You lose. 😞';
		}
	}

	resultEl.innerText = `You chose ${you} and the cpu chose ${cpu}. ${result}`;
};

const cpuPlay = () => choiceArr[Math.floor(Math.random() * (2 - 0 + 1) + 0)];

const play = e => {
	const clickedId = e.target.id;
	const cpuChoice = cpuPlay();
	loadEl.style.display = 'block';
	resultEl.style.display = 'none';
	setTimeout(gameLogic, 1000, clickedId, cpuChoice);
};
